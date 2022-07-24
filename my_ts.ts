// interface IUser{
//     first_name:string;
//     last_name:string;
//     date_of_birth:Date;
// }

// class Man{
//     height:number;
//     contry:string;
//     Myuser:IUser
//    constructor(height:number,contry:string,Myuser:IUser){
//     this.height=height;
//     this.contry=contry;
//     this.Myuser=Myuser;
//    }
// }
// let Myuser:IUser={first_name:"yehuda",last_name:"sanay",date_of_birth:new Date("05/23/1991")};
// const Man1:Man=new Man(38,"israel",Myuser)

// interface ICar{
//     brand:string;
//     door_number:number;
//     weels_number:number
// }

// // class Car_store{
// //     city:string;
// //     contry:string;
// //     stor_name:string;
// //     cars_array:ICar[];
// //     constructor(city:string,contry:string,stor_name:string,cars_array:ICar[]){
// //         this.city=city;
// //         this.contry=contry;
// //         this.stor_name=stor_name;
// //         this.cars_array=cars_array;
// //     }
// // }
// // let Car1:ICar={brand:"toyota",door_number:4,weels_number:4};
// // let Car2:ICar={brand:"mazda",door_number:3,weels_number:4};
// // let Car3:ICar={brand:"bmw",door_number:2,weels_number:4};

// // const My_stor:Car_store=new Car_store("ramat gan","israel","yehuda stor",[Car1,Car2,Car3])
// // console.log(My_stor)

// class Grage{
//     garag_name:string;
//     owner_name:string;
//     righteouns:boolean;
//     my_cars_array:ICar[];
//     constructor(garag_name:string,owner_name:string,righteouns:boolean,my_cars_array:ICar[]){
//         this.garag_name=garag_name;
//         this.owner_name=owner_name;
//         this.righteouns=righteouns;
//         this.my_cars_array=my_cars_array;
//     }
// }
// let Grage1:ICar={brand:"mazda",door_number:3,weels_number:4};
// let Grage2:ICar={brand:"mazda",door_number:5,weels_number:3};
// const My_garag:Grage=new Grage("best garag","yehuda",true,[Grage1,Grage2]);

// function myFunc<N>(myName:N,num:number){
//     for(let i=0;i<num;i++){
//         console.log(myName);
//     }
// }
// myFunc<string>("yehuda",3);

// function returnTrueOrF<S,N>(firstName:S,HomeNum:N,atHome:boolean){
//     return atHome ? firstName : HomeNum
// }
// returnTrueOrF<string,number>("yehuda",32,true)