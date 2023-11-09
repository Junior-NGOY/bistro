import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";
import { db } from "../firebase";
import {
  collection,
  collectionGroup,
  getDoc,
  getDocs,
  doc,
  orderBy,
  onSnapshot,
  query
} from "firebase/firestore";
import ProductContent from "./../components/ProductContent";

const CommandeScreen = () => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [personnes, setPersonnes] = useState([]);
  const [documentParent, setDocumentParentes] = useState([]);

  useEffect(() => {
    //  if (product.length > 0) return;

    const fetchProducts = async () => {
      const q = query(collection(db, "commandes"), orderBy("date","desc"));
      const cmdSnap = onSnapshot(q, (querySnapshot) => {
       // const isOffline = querySnapshot.metadata.hasPendingWrites
        querySnapshot.forEach((doc) => {
            setItems(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id })))
        });
        //console.log("Current cities in CA: ", cities.join(", "));
      });
     // console.log(cmdSnap)
  /*     const persSnap = await getDocs(persRef);
      persSnap.forEach((doc) => {
        //const documentReference = doc.ref; // DocumentReference
        //const documentParent = documentReference.parent; // CollectionReference
        //items.push(doc.data());
        setItems(persSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        //console.log(doc.id, " => ", doc.data());
        //const colRef = query (collection(db, "personne", `${doc.id}`, "enfants"));
        //const querySnapshot =   getDocs(colRef);
        // console.log(personnes)
        //console.log('---------')
        //console.log(documentParent.parent)
      }); */

      /* const colRef = collection(db, "personne", "m7fky8MK7WliKF5LvmSY", "enfants");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        //items.push(doc.data());
        console.log(doc.id, " => ", doc.data());
        setItems(docsSnap.docs.map((doc)=>({...doc.data(),id:doc.id})))
      });  */

      //items?.map((commande) => dispatch(getProducts(commande)));
      // console.log(items)
    };
    fetchProducts();
  }, []);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../assets/beto.jpeg")}
            style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
          />
        </Pressable>
      ),
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={items}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return <ProductContent commande={item} />;
        }}
        ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
export default CommandeScreen;
