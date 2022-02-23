import React, {useEffect, useState} from "react";
import {Text, View, ScrollView,} from 'react-native';
import RestaurantCard from "../components/RestaurantCard";
import {Button} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

function RestaurantList(){
   const [restaurants, setRestaurants]= useState()
    useEffect (() => {
        // fetch data from api
        fetch('https://bocacode-intranet-api.web.app/restaurants')
        .then(response => response.json())
        .then(data => setRestaurants(data))
        .catch(alert)
    }, [])

    const navigation = useNavigation()
    const handleAddNew = () => {
        navigation.navigate('AddNewRestaurant')

    }
    return (
    <View>
        <Button title='Add Restaurant'
        onPress={handleAddNew}
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
    {!restaurants
      ? <Text>Loading...</Text>
      : <ScrollView>{restaurants.map(restaurant => {
          return <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
      })}</ScrollView>
    }
    </View>
    )
}



export default RestaurantList