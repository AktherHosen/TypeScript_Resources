// Referrence Type -> Object
const user: {
  readonly companyName: string; //if a value is type it is called literal
  firstName: string;
  middleName?: string; // if i need optional i sould add ?
  lastName: string;
  isMarried: boolean;
} = {
  companyName: "Devsbrain",
  firstName: "Akther",
  //   middleName: 'Hosen',
  lastName: "Nowshad",
  isMarried: false,
};

// user.companyName = "PH";  // can not assign read only property
