"use strict";

/* 
Bir initialValue parametresi alan bir StringBuilder sınıfı yazın - oluşturulan nesnenin value özel özelliğine yazılan rastgele bir dize.

Aşağıdaki sınıf metodlarını tanımlayın:

getValue() - value özel özelliğinin geçerli değerini döndürür.
padEnd(str) - str (dize) parametresini alır ve bu metodu çağıran nesnenin value özel özelliğinin değerinin sonuna ekler.
padStart(str) - str (string) parametresini alır ve bu metodu çağıran nesnenin value özel özelliğinin değerinin başlangıcına ekler.
padBoth(str) - str (dize) parametresini alır ve bu yöntemi çağıran nesnenin value özel özelliğinin değerinin başına ve sonuna ekler.
Aşağıdaki kodu örnek başlatma ve metodlarıyla birlikte alın ve çalışmanın doğruluğunu kontrol etmek için sınıf tanımlanmasından sonra yapıştırın. Konsol, çalışmalarının sonuçlarını gösterecektir. Lütfen orada herhangi bir değişiklik yapmayın.
*/

class StringBuilder {
  #value;

  constructor(value) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
