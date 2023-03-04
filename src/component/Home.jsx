
import Cards from "./Card";
import  Nav1  from "./Nav";
// import { Card } from "react-bootstrap";
// import { Even } from "../Component/Event";

function Home() {
  const userData = [
    { firstName: "junaid", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
    {
      firstName: "khizer",
      lastName: "mohammad",
      location: "hyderabad",
      age: 35,
    },
    { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
    { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
    { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
    { firstName: "sohail", lastName: "qazi", location: "hyderabad", age: 32 },
    { firstName: "mubeen", lastName: "uddin", location: "hyderabad", age: 36 },
    { firstName: "inayat", lastName: "khan", location: "hyderabad", age: 24 },
    { firstName: "junaid", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
    {
      firstName: "khizer",
      lastName: "mohammad",
      location: "hyderabad",
      age: 35,
    },
    { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
    { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
    { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
    { firstName: "sohail", lastName: "qazi", location: "hyderabad", age: 32 },
    { firstName: "mubeen", lastName: "uddin", location: "hyderabad", age: 36 },
    { firstName: "inayat", lastName: "khan", location: "hyderabad", age: 24 },
  ];
  let unRegisterUserData = [
    { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
    { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
    { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
    { firstName: "sohail", lastName: "qazi", location: "hyderabad", age: 32 },
    { firstName: "mubeen", lastName: "uddin", location: "hyderabad", age: 36 },
    { firstName: "inayat", lastName: "khan", location: "hyderabad", age: 24 },
  ];

  // Card Menu Details

  const menu = [
    {
      itemName: "Caesar's Salad",
      description: "The original Caesar's Salad recipe",
      foodImage: "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400",
      price: 12,
      isFavorite: false,
    },
    {
      itemName: "Spaghetti Carbonara",
      description: "Better than your nonna's! All local and fresh ingredients",
      foodImage: "https://images.unsplash.com/photo-1677252558828-b81ff3935967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 15,
      isFavorite: false,
    },
    {
      itemName: "Grilled Whole Fish",
      description: "Fish of the day, grilled whole with a side of vegetables",
      foodImage: "https://images.unsplash.com/photo-1677177871850-5dc0f6dbfe76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      price: 20,
      isFavorite: false,
    },
    {
      itemName: "Steak Florentine",
      description: "Meat!",
      foodImage: "https://images.unsplash.com/photo-1677207319418-24c913a44a94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      price: 30,
      isFavorite: false,
    },
    {
      itemName: "Caesar's Salad",
      description: "The original Caesar's Salad recipe",
      foodImage: "https://bit.ly/2GJFu5W&",
      price: 12,
      isFavorite: false,
    },
    {
      itemName: "Spaghetti Carbonara",
      description: "Better than your nonna's! All local and fresh ingredients",
      foodImage: "https://images.unsplash.com/photo-1677207319418-24c913a44a94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      price: 15,
      isFavorite: false,
    },
    {
      itemName: "Grilled Whole Fish",
      description: "Fish of the day, grilled whole with a side of vegetables",
      foodImage: "https://images.unsplash.com/photo-1677177871850-5dc0f6dbfe76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      price: 20,
      isFavorite: false,
    },
    {
      itemName: "Steak Florentine",
      description: "Meat!",
      foodImage: "https://images.unsplash.com/photo-1677059619416-f9a93b3fd8a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: 30,
      isFavorite: false,
    },  
  ];

  // let st = { styledisplay: "flex" };

  return (
    <div>
      <Nav1 />
      {/* <Carasole /> */}
        {/* <Body /> */}
      <div  >
        <Cards title={menu} />
        
        {/* <Cards title={menu} />
        <Cards title={menu} /> */}

      </div>
      {/* <Footer /> */}
      {/* <Cards title={{title:"Faheem",des:"Khan"}} /> */}
      {/* <Cards title="Faheem" des="This Is The Non Obj" src="logo192.png" />
      <Cards
        title="Mujju"
        des="This Is The Non Obj"
        src="https://images.unsplash.com/photo-1675189693048-4bef1b0690db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      /> */}
      {/* <div className="cardss"> */}
      {/* <Cards title="Caesar's Salad"  desc="The original Caesar's Salad recipe" src="https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-10-1200.jpg"/>
        <Cards title="Spaghetti Carbonara"  desc="Better than your nonna's! All local and fresh ingredients" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&webp=true&resize=440,400"/>
        <Cards title="Grilled Whole Fish"  desc="Fish of the day, grilled whole with a side of vegetables" src="https://assets.wsimgs.com/wsimgs/ab/images/dp/recipe/202032/0048/img56l.jpg"/>
        <Cards title="Steak Florentine"  desc="Meat!" src="https://www.foodandwine.com/thmb/amAtvihyO4sxGV2-dj7sobYaDn0=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc()/201305-r-florentine-beefsteak_0-2000-eea190cb4f0e4d68b0595f9042c1f3b8.jpg"/> */}

      {/* </div>  */}


      {/* <UserDynamicTable
        userDetails={userData}
        heading="Register User Data"
        color="green"
      /> */}

      {/* <UserDynamicTable
        userDetails={unRegisterUserData}
        heading="UnRegister User Data"
        color="red"
      />
    <Even/> */}

    </div>



  );
}

export default Home;
