// closure ,lexical ,environment ,class  bugungi mavzu
// class Worker {
//   constructor(name, role, nat, lang) {
//     (this.name = name),
//       (this.role = role),
//       (this.nat = nat),
//       (this.lang = lang);
//   }

//   work() {}

//   getSalary() {}
// }

// let user = new Worker("Izzatillo", "Developer", "Uzbek", "English");
// console.log(user);
// class Admin extends Worker {
//   constructor(name, role, nat, lang, office) {
//     super(name, role, nat, lang);
//   }
// }

// class Admin extends Worker {
//   constructor(name, role, nat, lang, office) {
//     super(name, role, nat, lang);

//     this.office = office;
//   }

//   control() {}
// }
// let Admin1 = new Admin("Izzatillo", "Developer", "Uzbek", "English");
// console.log(Admin1);

// -------------UY ISHI----------------

// 1. Ism, yosh va mamlakat xususiyatlariga ega "Person" deb
// nomlangan class yaratish uchun JavaScript dasturini yozing.
// Shaxsning tafsilotlarini ko'rsatish metodini qoʼshing. Person
// classini ikkita nusxasini yarating va ularning tafsilotlarini ko'rsating.

// class person {
//   constructor(ism, yosh, mamlakat) {
//     this.ism = ism;
//     this.yosh = yosh;
//     this.mamlakat = mamlakat;
//   }

//   worker() {
//     console.log(
//       `Ism: ${this.ism} , yosh: ${this.yosh} , mamlakat: ${this.mamlakat}`
//     );
//   }
// }

// let shaxs1 = new person("Izzatillo", 17, "Ozbekiston");
// let shaxs2 = new person("John", 30, "AQSh");

// shaxs1.worker();
// shaxs2.worker();

// 3. Marka, model va yil uchun xususiyatlarga ega 'Vehicle' deb
// nomlangan classni yaratadigan JavaScript dasturini yozing.
// Avtomobil tafsilotlarini ko'rsatish usulini qo'shing. 'Avtomobil'
// classidan meros bo'lib o'tadigan va eshiklar soni uchun qo'shimcha
// mulkni o'z ichiga olgan 'avtomobil' deb nomlangan subklass
// yarating. Eshiklar sonini kiritish uchun displey usulini bekor qiling.

// class car {
//   constructor(marka, model, yili) {
//     this.marka = marka;
//     this.model = model;
//     this.yili = yili;
//   }

//   worker() {
//     console.log(
//       `Markasi: ${this.marka} , Modeli: ${this.model} , Yili: ${this.yili}`
//     );
//   }
// }
// let car1 = new car("Chevrolet", "Damas", 2024);
// let car2 = new car("Chevrolet", "Kobalt", 2024);

// car1.worker();
// car2.worker();

// class Avtomobil extends car {
//   constructor(marka, model, yil, eshiklar_soni) {
//     super(marka, model, yil);
//     this.eshiklar_soni = eshiklar_soni;
//   }
// }
// const avto = new Avtomobil("Toyota", "Corolla", 2022, 4);
// avto.worker();
// console.log("Eshiklar soni:", avto.eshiklar_soni);

// 6. Ism va ish haqi uchun xususiyatlarga ega 'xodim' deb nomlangan
// classni yaratadigan JavaScript dasturini yozing. Yillik ish haqini
// hisoblash usulini qo'shing. 'Xodim' classidan meros bo'lib o'tadigan
// va bo'lim uchun qo'shimcha mulk qo'shadigan 'menejer' deb
// nomlangan kichik class yarating. Menejerlar uchun bonuslarni
// kiritish uchun yillik ish haqini hisoblash usulini bekor qiling.
// Menejer classining ikkita misolini yarating va ularning yillik ish
// haqini hisoblang.

// class Xodim {
//     constructor(ism, ishHaqi) {
//       this.ism = ism;
//       this.ishHaqi = ishHaqi;
//     }
  
//     yillikIshHaqi() {
//       return this.ishHaqi * 12;
//     }
//   }
  
//   class Menejer extends Xodim {
//     constructor(ism, ishHaqi, bonus) {
//       super(ism, ishHaqi);
//       this.bonus = bonus;
//     }
  
//     yillikIshHaqi() {
//       return super.yillikIshHaqi() + this.bonus;
//     }
//   }
//   const menejer = new Menejer("John Doe", 5000, 2000);
//   console.log(`${menejer.ism} menejerining yillik ish haqi: $${menejer.yillikIshHaqi()}`);
  

// 7. Sarlavha, muallif va nashr yili uchun xususiyatlarga ega kitob
// classini yaratadigan JavaScript dasturini yozing. Kitob tafsilotlarini
// ko'rsatish usulini qo'shing. 'Kitob' classidan meros bo'lib o'tadigan
// va kitob narxi uchun qoʼshimcha mulkni oʼz ichiga olgan 'Ebookʼ
// deb nomlangan kichik class yarating. Kitob narxini kiritish uchun
// displey usulini bekor qiling. 'Ebook' classining namunasini yarating
// va uning tafsilotlarini ko'rsating.

// class Kitob {
//   constructor(sarlavha, maulif, nashryili) {
//     this.sarlavha = sarlavha;
//     this.maulif = maulif;
//     this.nashryili = nashryili;
//   }

//   tafsilot() {
//     console.log(
//       `Sarlavha: ${this.sarlavha} Mualif: ${this.maulif} NashrYili: ${this.nashryili}`
//     );
//   }
// }

// class book extends Kitob {
//   constructor(sarlavha, muallif, nashrYili, narx, elektronFormat) {
//     super(sarlavha, muallif, nashrYili);
//     this.narx = narx;
//     this.elektronFormat = elektronFormat;
//   }

//   tafsilot() {
//     console.log(
//       `Sarlavha: ${this.sarlavha},Mualif: ${this.maulif},NashrYili:${this.nashryili},Narxi:$${this.narx}, Elektron format: ${this.elektronFormat} `
//     );
//   }
// }
// const mybook = new book("JavaScript Programming", "John Doe", 2022, 25, "PDF");
// mybook.tafsilot();

// 10. Mahsulot identifikatori, nomi va narxi uchun xususiyatlarga ega
// mahsulot deb nomlangan class yaratadigan JavaScript dasturini
// yozing. Narxni miqdorga ko'paytirish orqali umumiy narxni
// hisoblash usulini kiriting. Mahsulot classidan meros bo'lib
// o'tadigan va kafolat muddati uchun qoʼshimcha mulk qoʼshadigan
// PersonalCareProduct deb nomlangan kichik class yarating. Kafolat
// muddatini kiritish uchun umumiy narxni hisoblash usulini bekor
// qiling. PersonalCareProduct classining namunasini yarating va
// uning umumiy narxini hisoblang.

// class Mahsulot {
//     constructor(id, nomi, narx) {
//       this.id = id;
//       this.nomi = nomi;
//       this.narx = narx;
//     }

//     umumiyNarx(miqdor) {
//       return this.narx * miqdor;
//     }
//   }
//   class Personal extends Mahsulot {
//     constructor(id, nomi, narx, kafolatMuddati) {
//       super(id, nomi, narx);
//       this.kafolatMuddati = kafolatMuddati;
//     }
//   }
//   const shampoo = new Personal("SH001", "Shampoo", 10, "3 oy");
//   console.log(`Shampoo umumiy narxi: $${shampoo.umumiyNarx(2)}`);
