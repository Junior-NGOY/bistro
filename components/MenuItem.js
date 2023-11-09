import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ImageBackground,
  } from "react-native";
  import React from "react";
 
  import { useNavigation } from "@react-navigation/native";
  //import { StyleSheet, Text, View, Pressable,ImageBackground, Image } from "react-native";
//import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
 
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";

  const MenuItem = ({ item }) => {
    const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const addItemToCart = () => {
    dispatch(addToCart(item)); // cart
    dispatch(incrementQty(item)); // product
  };
    const navigation = useNavigation();
    return (
      <View style={{ margin: 10 }}>
        <Pressable
           onPress={() =>
            navigation.navigate("PickUp", {
              id: item.id,
              name:item.name,
              image:item.image,
              rating:item.rating,
              time:item.time,
              adress:item.adress,
              cost_for_two:item.cost_for_two,
              cuisines:item.cuisines,
              menu:item.menu,
            })
          }
          style={{ flexDirection: "row" }} 
        >
          <View>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
              source={{ uri: item.image }}
            >
              <AntDesign
                style={{ position: "absolute", top: 10, right: 10 }}
                name="hearto"
                size={24}
                color="white"
              />
            </ImageBackground>
          </View>
  
         {/*   */}
         <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
            {item.description}
            </Text>
          </View>

          <Text style={{ fontSize: 16, color: "gray", marginTop: 6 }}>
            {item.description}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFB6C1",
                width: 42,

                height: 42,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                $ {item.price}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
             // marginTop: 10,
              bottom: -10,
              position:"absolute",
            }}
          >
            {cart.some((c) => c.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Pressable
              onPress={() => {
                dispatch(decrementQuantity(item)); // cart
                dispatch(decrementQty(item)); // product
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignContent: "center",
                 
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#088F8F",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                  
                }}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 19,
                  color: "#088F8F",
                  paddingHorizontal: 8,
                  fontWeight: "600",
                  
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                dispatch(incrementQuantity(item)); // cart
                dispatch(incrementQty(item)); //product
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignContent: "center",
                
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#088F8F",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                  
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable onPress={addItemToCart} style={{ width: 80 }}>
            <Text
              style={{
                borderColor: "gray",
                borderRadius: 4,
                borderWidth: 0.8,
                marginVertical: 10,
                color: "#088F8F",
                textAlign: "center",
                padding: 5,
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Add
            </Text>
          </Pressable>
        )}
          </View>
         
        </View>
        
        </Pressable>
        
      </View>
    );
  };
  
  export default MenuItem;
  
  const styles = StyleSheet.create({});
  