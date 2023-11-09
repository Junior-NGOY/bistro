import { View, Text } from "react-native";
import React from "react";
import { useColorScheme } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const GrayText = ({ children, numberOfLines, style }) => {
  return (
    <Text style={[style, styles.gray]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
const ProductContent = ({ commande }) => {
  const theme = useColorScheme();
  // console.log(commande?.orders ? Object.values(commande.orders) : '');
  return (
    <View key={commande?.id} style={styles.singleItem}>
      <View style={styles.row}>
        <View style={styles.tweetContentContainer}>
          <View style={styles.rowTop}>
            <Text
              numberOfLines={1}
              style={[
                styles.header,
                { color: theme === "dark" ? "#FFF" : "#000" }
              ]}
            >
             Date : { new Date(commande.date.toDate()).toDateString()}
             
            </Text>
          </View>
          <Text
             style={[
              styles.header,
              { color: theme === "dark" ? "#FFF" : "#000" }
            ]}
          >
            {commande?.orders &&
              Object.values(commande.orders).map((order) => (
                <View key={order.name}>
                <Text>
                 Produit : {order.name}  Prix : {order.price}$
                </Text> 
                <Text>
                 <GrayText>Quantité : {order.quantity}  </GrayText>
                 <GrayText> Total ligne : {order.quantity * order.price} $</GrayText>
                </Text> 
                </View> 
              ))}
              </Text> 
          <Text
             style={[
              styles.header,
              { color: theme === "dark" ? "#FFF" : "#000" }
            ]}
          >
            Client : {commande.client}
           
          </Text>
          <Text
             style={[
              styles.header,
              { color: theme === "dark" ? "#FFF" : "#000" }
            ]}
          >
            Vendeur : {commande.vendeur}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  author: {
    flexShrink: 1,
  },
  actionBar: {
    marginTop: 8,
    justifyContent: "space-between",
    marginRight: 16,
  },
  actionButton: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  gray: {
    color: "#777",
    fontSize: 13,
    paddingRight: 2,
  },

  header: {
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 4,
    paddingRight: 4,
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#000",
  },
  singleItem: {
    paddingHorizontal: 16,
    minHeight: 44,
    flex: 1,
    padding: 16,
  },
  rowTop: {
    flexDirection: "row",
  },
  rowActions: {
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  row: {
    //flexDirection: "row",
  },
  elemAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actionText: {
    fontSize: 12,
    color: "#444",
  },
  tweetContentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
});

export default ProductContent;
