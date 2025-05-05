{
  //Dynamic Generic Type
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releasedYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    price: number;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Akther",
    computer: {
      brand: "ASUS",
      model: "X-255SU",
      releasedYear: 2024,
    },
    smartWatch: {
      brand: "UILab",
      price: 20,
    },
  };

  interface AppleWatch {
    brand: string;
    price: number;
    model: string;
  }
  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "RichKid",
    computer: {
      brand: "Macbook Pro Air 2",
      model: "X-255SU",
      releasedYear: 2025,
    },
    smartWatch: {
      brand: "Apple Watch",
      price: 20,
      model: "Test",
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };
}
