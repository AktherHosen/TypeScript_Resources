{
  // conditional type
  type a1 = number;
  type b1 = undefined;
  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Seikh = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicles<T> = T extends keyof Seikh ? true : false;
  type hasBike = CheckVehicles<"car">;

  //
}
