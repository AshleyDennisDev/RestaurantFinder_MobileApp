import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'



export default function AddNewRestaurant() {
    const [restaurantName, setRestaurantName]= useState()
    const[address, setAddress] = useState()
    const [photo, setPhoto]= useState()
    const [rating, setRating]= useState()
    const [btnDisabled, setBtnDisabled] = useState(true)

    const [newRestaurant, setNewRestaurant]= useState()

    const navigation = useNavigation()


    useEffect(() => {
        if(newRestaurant.address && newRestaurant.name) {            
                setBtnDisabled(false)
            } 
    }, [newRestaurant])

    const sendNewRestaurantInfo = () => {
        fetch('https://bocacode-intranet-api.web.app/restaurants', {
            method: 'POST',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRestaurant)
        })
        .then(() => alert('New Restaurant Added'))
        .then(() => navigation.navigate('Home'))
        .catch(err => console.error(err))
    }
    return(
            <View>
                <Text> This is my ADD Restaurant Screen</Text>
                <Input 
                placeholder="Restaurant Name" 
                spellCheck 
                onChangeText={userText => setRestaurantName({...newRestaurant, name: userText})}
                />
                <Input 
                placeholder="Addresss" 
                onChangeText={text => setAddress({...newRestaurant, address: text})}
                />
                <Input 
                placeholder="Photo" 
                keyboardType="url" 
                onChangeText={text => setPhoto({...newRestaurant, photo: text})}
                />
                <Input 
                placeholder="Rating" 
                keyboardType="numeric" 
                maxLength='1'
                onChangeText={text => setRating({...newRating, rating: text})}
                />
                
                <Button title="Create New Restaurant"
                    disabled={btnDisabled}
                    onPress={sendNewRestaurantInfo}
                       buttonStyle={{
                        backgroundColor: 'olive',
                        borderRadius: 30,
                      }}
                      containerStyle={{
                        alignSelf: 'center',  
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                      }}/>

            </View>
    )
}