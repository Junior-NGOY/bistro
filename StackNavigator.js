import { StyleSheet, Text,Image, View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
 
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProduct from "./screens/AddProduct";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import DashboardScreen from "./screens/DashboardScreen";
import CommandeScreen from './screens/CommandeScreen';
import SupplierScreen from "./screens/SupplierScreen";
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';
import HelpScreen from './screens/HelpScreen';
import ConfidentialityScreen from './screens/ConfidentialityScreen';
import ReportScreen from './screens/ReportScreen';
import ExpenseScreen from './screens/ExpenseScreen';
import CategoryScreen from './screens/CategoryScreen';
import User from "./assets/beto.jpeg";



// Tabs
const Tab = createBottomTabNavigator();

function TabsGroup({ navigation }) {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerTitleAlign: "center",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Order") {
            iconName = focused ? "list" : "list";
          } else if (route.name === "Nouveau") {
            iconName = focused ? "md-add-sharp" : "md-add-outline";
          } else if (route.name === "Liste") {
            iconName = focused ? "list" : "list-circle";
          } else if (route.name === "Panier") {
            iconName = focused ? "cart" : "cart-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Liste"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Panier"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{ headerShown: false,title: "Feedback", }}
      />
   
      </Tab.Navigator>
    );
  }

Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,

        drawerStyle: {
          backgroundColor: "#fff",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerLabelStyle: {
          color: "#111",
        },
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#f4f4f4",
                borderBottomWidth: 1,
              }}
            >
               <Image
                source={User}
                style={{
                  height: 130,
                  width: 130,
                  borderRadius: 65
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  marginVertical: 6,
                  fontWeight: "bold",
                  color: "#111",
                }}
              >
                Junior NGOY
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#111",
                }}
              >
                Product Manager
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#111",
                }}
              >
                Shop 1
              </Text>
            </View>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      }}
    >
     
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          drawerLabel: "Accueil",
          title: "Tableau de bord",
          drawerIcon: () => (
            <FontAwesome name="home" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Home"
        component={TabsGroup}
        options={{
          drawerLabel: "Vente",
          title: "Opérations de vente",
          drawerIcon: () => (
            <AntDesign name="shoppingcart" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          drawerLabel: "Catégorie",
          title: "Liste des catégories",
          groupName: "Section 1",
          drawerIcon: () => (
            <MaterialIcons name="category" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Product"
        component={HomeScreen}
        options={{
          drawerLabel: "Produit",
          title: "Liste des produits",
          groupName: "Section 1",
          drawerIcon: () => (
            <FontAwesome name="product-hunt" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Commande"
        component={CommandeScreen}
        options={{
          drawerLabel: "Commande",
          title: "Liste des commandes",
          groupName: "Section 1",
          drawerIcon: () => (
            <MaterialIcons name="point-of-sale" size={20} color="#808080" />
          ),
        }}
      />
     
      <Drawer.Screen
        name="Expense"
        component={ExpenseScreen}
        options={{
          drawerLabel: "Depenses",
          title: "Rapport des Depenses",
          groupName: "Section 1",
          drawerIcon: () => (
            <FontAwesome name="money" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Report"
        component={ReportScreen}
        options={{
          drawerLabel: "Rapport",
          title: "Rapport des ventes",
          groupName: "Section 1",
          drawerIcon: () => (
            <MaterialCommunityIcons name="file-document-outline" size={20} color="#808080" />
          ),
        }}
      />
       <Drawer.Screen
        name="Supplier"
        component={SupplierScreen}
        options={{
          drawerLabel: "Fornisseur",
          title: "Liste des Fournisseurs",
          groupName: "Section 1",
          drawerIcon: () => (
            <Entypo name="user" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="User"
        component={UserScreen}
        options={{
          drawerLabel: "Utilisateur",
          title: "Liste des utilisateurs",
          groupName: "Section 1",
          drawerIcon: () => (
            <FontAwesome5 name="user" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerLabel: "Paramètre",
          title: "Paramètre",
          groupName: "Section 1",
          drawerIcon: () => (
            <AntDesign name="setting" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          drawerLabel: "Aide",
          title: "Comment utiliser",
          groupName: "Section 1",
          drawerIcon: () => (
            <Entypo name="help" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Confidentiality"
        component={ConfidentialityScreen}
        options={{
          drawerLabel: "Confidentialité",
          title: "Contrat & Confidentialité",
          groupName: "Section 1",
          drawerIcon: () => (
            <FontAwesome5 name="file-contract" size={20} color="#808080" />
          ),
        }}
      />
       <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerLabel: "Login",
          title: "Login",
          drawerIcon: () => (
            <FontAwesome name="home" size={20} color="#808080" />
          ),
        }}
      />
       <Drawer.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          drawerLabel: "S'enregistrer",
          title: "S'enregistrer",
          drawerIcon: () => (
            <FontAwesome name="home" size={20} color="#808080" />
          ),
        }}
      />
            <Drawer.Screen name="quit" component={ProfileScreen}
           options={{
            drawerLabel: "Quitter",
            title: "Quitter",
            drawerIcon: () => (
              <MaterialCommunityIcons name="exit-to-app" size={20} color="#808080" />
            )
          }}
      />
    </Drawer.Navigator>
  );
}
const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <DrawerGroup />
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
