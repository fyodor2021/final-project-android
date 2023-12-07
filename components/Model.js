import * as SQLite from 'expo-sqlite'
import React, { useEffect } from 'react';


    export default  db = SQLite.openDatabase('restaurant.db');

    export const initializeDatabase = () => {
        db.transaction(tx => tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, username TEXT, password TEXT, address TEXT, birth_date TEXT)'
          )
        );
      db.transaction(tx => tx.executeSql(
          'CREATE TABLE IF NOT EXISTS restaurants (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT, phone_number TEXT, description TEXT, tags TEXT, image_data TEXT )'
        ) , null, (txObj,results) => console.log(results),
        (txObj,error) => console.log(error)
  
      );
      db.transaction(tx => tx.executeSql(
          'CREATE TABLE IF NOT EXISTS reviews (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, restaurant_id INTEGER, review_body TEXT,star_rate INTEGER)'
        )
      );
  
        
    }
    

    // db.transaction(tx => tx.executeSql(
    //       'DROP TABLE IF EXISTS users'
    //     )
    //   );

    

    export const addUser = (input) => {
        const { email, username, password, address, birth_date } = input;

        db.transaction(tx => {
            tx.executeSql(`INSERT INTO users (email, username, password, address, birth_date) VALUES (?,?,?,?,?)`, 
            [ email, username, password, address, birth_date ], 
            (txObj, results) => console.log(`${username} is added to users`),
               (txObj,error) => console.log(error) )
        })
    }
    export const getAllUsers = () => {
        db.transaction(tx =>{
            tx.executeSql('SELECT * FROM users', null,
         //   (txObj,results) =>{ return results.rows._array})
            (txObj,results) =>console.log(results.rows._array) )

        })
    }

    export const isMember = (input, callback) => {
        const {username, password} = input;

        db.transaction(tx => {
            tx.executeSql(`SELECT * FROM users WHERE username=? AND password=?`, 
            [username, password], 
            (txObj, results) => {if (results.rows.length > 0) {callback(true)} else {callback(false)}},
               (txObj,error) => console.log(error) )
        })
    }

    export const getAllRestaurants = () => {
        return new Promise ( (res, rej) => {
            db.transaction(tx => {
                tx.executeSql('SELECT * FROM restaurants', null,
                (txObj, results) => {console.log(results.rows._array) 
                    res(results.rows._array);},
                (txObj,error) => {rej(error);})
            });

        } );
    }

    export const addRestaurant = (input) => {
        const { name, address, phone_number, description, tags, image_data } = input;
        
        db.transaction(tx => {
            tx.executeSql(`INSERT INTO restaurants (name, address, phone_number, description, tags,image_data) VALUES (?,?,?,?,?,?)`, 
            [name, address, phone_number, description, tags, image_data ], 
            (txObj, results) => console.log(`${name} is added to restaurants`),
               (txObj,error) => console.log(error) )
        })
    }

    export const deleteRestaurant = (id) => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM restaurants where id=?' , [id],
            (txObj, results) => console.log(`resturant is deleted`),
               (txObj,error) => console.log(error) 
            )
        })
    }

    export const updateRestaurant = ( input,id) => {
        const { name, address, phone_number, description, tags, image_data } = input;
      
        db.transaction(tx => {
          tx.executeSql(
            'UPDATE restaurants SET name=?, address=?, phone_number=?, description=?, tags=?, image_data=? WHERE id=?',
            [name, address, phone_number, description, tags, image_data, id],
            (txObj, results) => {
              console.log(`Restaurant with ID ${id} is updated`);
            },
            (txObj, error) => {
              console.log(error);
            }
          );
        });
      };

    export const getAllReviews = () => {
        db.transaction(tx =>{
            tx.executeSql('SELECT * FROM reviews', null,
            // (txObj,results) =>{ return results.rows._array})
            (txObj,results) =>console.log(results.rows._array) )

        })
    }


    export const addReview = (input)=>{
        const {user_id, restaurant_id,review_body,star_rate} = input;
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO reviews (user_id,restaurant_id,review_body,star_rate) VALUES (?,?,?,?)', 
                [user_id, restaurant_id,review_body,star_rate],
                (txObj,results) => console.log('review was added successfully'),
                (txObj,error) => console.log(error)
            )
        })
      }  
      
    export const deleteReview = (id) => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM reviews where id=?' , [id],
            (txObj, results) => console.log(`review is deleted`),
               (txObj,error) => console.log(error) 
            )
        })
    }
    export const updateReview = (input,id)=>{
        const {review_body,star_rate} = input;
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE reviews SET review_body=?, star_rate=? WHERE id=?',
                [review_body,star_rate,id],
                (txObj,results) => console.log('review was updated successfully'),
                (txObj,error) => console.log(error)
            )
        })
      } 

    export const getRestaurantReviews = (id)=> {
        db.transaction( tx => {
            tx.executeSql(
                'SELECT * FROM reviews WHERE restaurant_id=?',[id],
            // (txObj,results) =>{ return results.rows._array})
            (txObj,results) =>console.log(results.rows._array) )           
        } )

    } 
    export const getUserReviews = (id)=> {
        db.transaction( tx => {
            tx.executeSql(
                'SELECT * FROM reviews WHERE user_id=?',[id],
            // (txObj,results) =>{ return results.rows._array})
            (txObj,results) =>console.log(results.rows._array) )           
        } )

    } 
    export const getUserReviewsforRestaurant = (user_id,restaurant_id)=> {
        db.transaction( tx => {
            tx.executeSql(
                'SELECT * FROM reviews WHERE user_id=? AND restaurant_id=?' ,[user_id,restaurant_id],
            // (txObj,results) =>{ return results.rows._array})
            (txObj,results) =>console.log(results.rows._array) )           
        } )




    



    //________________________________________________Testing____________________________________________________

    // useEffect(() => {
    //     db.transaction(tx => {
    //       tx.executeSql(
    //         "SELECT name FROM sqlite_master WHERE type='table' AND name='users'",
    //         [],
    //         (_, result) => {
    //           if (result.rows.length > 0) {
    //             console.log("The 'users' table exists!");
    //           } else {
    //             console.log("The 'users' table does not exist.");
    //           }
    //         },
    //         (_, error) => {
    //           console.error('Error checking table existence:', error);
    //         }
    //       );
    //     });
    
    //     // Check if the 'restaurants' table exists
    //     db.transaction(tx => {
    //       tx.executeSql(
    //         "SELECT name FROM sqlite_master WHERE type='table' AND name='restaurants'",
    //         [],
    //         (_, result) => {
    //           if (result.rows.length > 0) {
    //             console.log("The 'restaurants' table exists!");
    //           } else {
    //             console.log("The 'restaurants' table does not exist.");
    //           }
    //         },
    //         (_, error) => {
    //           console.error('Error checking table existence:', error);
    //         }
    //       );
    //     });
    //   }, []);
    
    //Call to check is addUser method works as expected
    // const input = {
    //     email:'user@gmail.com',
    //     username:'jujuBlue',
    //     password:'123',
    //     address:'1840 victoria park ave',
    //     birth_date: '19/05/2001'
    // }
    // addUser({input})


    //Call to check the isMember method works as expected
    // const input2 ={
    //     username:'jujuBlue',
    //     password:'123',
    
    // }
    // isMember({ input: input2, callback: exist => {
    //     if (exist) {
    //       console.log('User exists');
    //     } else {
    //       console.log('User does not exist');
    //     }
    
    // }});

    // const input = {
    //     name:'Mc',
    //     address:'400 kendal ave',
    //     phone_number:'416-556-8899',
    //     description:'the yummiest fried chicken',
    //     tags: 'fast food',
    //     image_data:'31343465464646'
    // }
    // addRestaurant({input})




    // const input = {
    //     name:'Wendys',
    //     address:'400 kendal ave',
    //     phone_number:'416-556-8899',
    //     description:'Worst fast food',
    //     tags: 'fast food',
    //     image_data:'31343465464646'
    // }
    // addRestaurant({input})
    // deleteRestaurant(14)
    // getAllRestaurants()
    // updateRestaurant({input},41)
    // getAllRestaurants()
    // getAllUsers()

    // const input ={ 
    //     user_id: 1,
    //     restaurant_id: 41,
    //     review_body: 'Great restaurant',
    //     star_rate: 5
    // }
    // addReview({input})
    //     getAllReviews()





//   return (
//     <p>Model</p>
//   )
}
