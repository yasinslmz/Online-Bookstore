Projenin api dosyalarını çalıştırmanız için bir kurulum veya değişiklik yapmanıza gerek yoktur.

React projesini çalıştırabilmeniz için bookshop klasörünü visual studio code da açınız.
Daha sonra gerekli node modulleri indirebilmeniz için terminal i açınız.
cd bookshop yazınız enterlayınız.
şimdi de npm install yazıp enterlayınız.
projeniz çalıştırılmaya neredeyse hazır şimdi aşağıdaki işlemi yapınız.


React client tarafında kendi bilgisayarınızın localhost portunu reacttaki ilgili .js uzantılı dosyalarda belirtilen yerlere yazınız.

Aşağıdaki dosyalarda ilgili localhost değişikliğini yapınız:

react projesini visual studio code da açınız.
pages klasörüne giriniz.

App.js
Checkout.js
Login.js
Register.js

bu 4 dosyanın içerisindeki fetch api fonksiyonundaki url kısmında sadece örneğin;
https://localhost:7247/api/Login/Register

https://localhost:7247 =>>>> bu kısmı değiştirmeniz gerekmektedir. sizin apiniz hangi portta çalışıyorsa o portu buraya yazınız.

bu 4 dosyadaki localhost gördüğünüz yerlerde bu değişikliği yapınız sadece portu değiştirmeniz gerekiyor hepsi bu.Fetch fonksiyonları zaten fonksiyonun başlangıçtaki kodlarında yazıyor çok aramanıza gerek kalmayacaktır.


react client projesini çalıştırmak için terminale gelip npm start yazıp enterlayınız.
şimdi web sayfanız açılacaktır.
Daha sonra kayıt olup login yaptıktan sonra ürün alıp faturalarınızı görüntüleyebilirsiniz.
Account sayfasında bunu görebilirsiniz.

İyi çalışmalar.