import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatacollectionService {constructor() { }

petList=[
  {id:"1",name:"German Shepherd",description:"The German Shepherd or Alsatian is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899. It was originally bred as a herding dog, for herding sheep.",date:"01 jan 2015",categorie:"Dogs",img:"https://www.thesprucepets.com/thmb/5ifyWuKUF7JaltzsQNy0vdFHJ84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/breed_profile_germansheperd_1118000_profile_2608-d7a78e7c1cf049879bec1ec19113ee42.jpg"},
  {id:"2",name:"Bulldog",description:"The Bulldog is a British breed of dog of mastiff type. It may also be known as the English Bulldog or British Bulldog. It is a medium sized, muscular dog of around 40–55 lb. They have large heads with a thick folds of skin around the face and shoulders, and a relatively flat face with a protruding lower jaw.",date:"05 feb 2018",categorie:"Dogs",img:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRYQC_v5bnrF4ScRVeYCGnfux2kt2GmjBXug_ezsi_i8aPyEMjxilhyQ_qzesxMmRFL9CjdoMZAMnefZDo"},
  {id:"3",name:"Corgi",description:"The Pembroke Welsh Corgi is a cattle herding dog breed that originated in Pembrokeshire, Wales. It is one of two breeds known as a Welsh Corgi. Pembroke Welsh Corgis descended from the Spitz family of dogs",date:"08 Apr 2019",categorie:"Dog",img:"https://image.petmd.com/files/styles/863x625/public/2022-10/pembroke-welsh-corgi.jpg"},
  {id:"4",name:"Siberian Husky",description:"The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute",date:"08 Aug 2013",categorie:"Dogs",img:"https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg"},
  {id:"5",name:"British Shorthair",description:"The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat, and broad face. The most familiar colour variant is the British Blue, with a solid grey-blue coat, orange eyes, and a medium-sized tail.",date:"05 Sep 2016",categorie:"Cats",img:"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSo08bPtMtiSrhiTX2-845VOe3mRXmoGvpHPXsLN5QCooa-MqTgm5jdSD-C6tlO-5BMgiptCDYLF4ea51w"},
  {id:"6",name:"Ragdoll",description:"The Ragdoll is a breed of cat with a distinct colorpoint coat and blue eyes. Its morphology is large and weighty, and it has a semi-long and silky soft coat. American breeder Ann Baker developed Ragdolls in the 1960s. They are best known for their docile, placid temperament and affectionate nature. ",date:"22 Oct 2019",categorie:"Cats",img:"https://www.thesprucepets.com/thmb/SvuBhLBKrr2kWpzY_csg55qGLG8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg"},
  {id:"7",name:"Maine Coon",description:"The Maine Coon is a large domesticated cat breed. It is one of the oldest natural breeds in North America. The breed originated in the U.S. state of Maine,[3] where it is the official state cat.",date:"17 Nov 2012",categorie:"Cats",img:"https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/03/maine-coon-cat-breed.jpg"},

]
}
