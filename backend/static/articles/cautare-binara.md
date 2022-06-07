<h2 class="text-decoration-underline text-center">Cautarea binara</h2>
Cautarea binara este unul dintre algoritmi fundamentali ai informaticii.

### Gasirea valorii intr-un sir sortat
In cea mai simpla forma, cautarea binara este folosita pentru a gasi intr-un
mod eficient o valoare intr-un sir sortat. Algoritmul mentine o zona in care
cauta, unde valoarea cautata se afla. La fiecare pas, algoritmul compara elementul din
mijloc cu valoarea care este cautata. Cu ajutorul compararii si din cauza faptului ca sirul
este sortat, algoritmul elimina o jumatate din zona de cautare. Repetand acest pas,
zona de cautare va ajunge sa aiba un singur element, acela fiind valoarea cautata.

### De exemplu
In urmatoarea secventa, valoarea *7* este cautata folosind cautarea binara:
![ilustratie cautare binara](/binary-search.png)

### Complexitate
Din cauza faptului ca la fiecare pas suprafata de cautare se injumatateste, complexitatea
algoritmului este *O(log N)*. Logaritmul este o functie care creste foarte incet. Astfel, 
algoritmul de cautare binara este foarte eficient. Graficul functiei **log(x)** este:

![complexitate O(log N)](/O(logN).png)

Pentru o secventa de *3000* de valori, o cautare obisnuita parcurge in cel mai rau caz toate
valorile, adica *3000* de accesari. In schimb, cautand binar, se vor parcurge in cel mai rau
caz **log(3000)** accesari, adica *12*.

### Implementare
* functia va "returna" indicele lui *x* daca-l gaseste, iar daca nu *-1*
* **n** - numarul de elemente a vectorului (secventa) *arr*
* **arr** - secventa sortata
* **x** - elementul care se cauta in *arr*
* **[lo, hi]** - intervalul de indici in care se cauta *x* in *arr*

```
int cautareBinara(int n, int arr[], int x) {
    int lo = 0, hi = n - 1;
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (x == arr[mid])
            return mid;
        else if (x < arr[mid])
            lo = mid + 1;
        else
            hi = mid - 1;
    }
    return -1;
}
```

### Implementarea cu ajutorul librariei standard din C++ (STL)
In STL, exista trei functii in care este implementata cautarea binara: 
1. **binary_search** - returneaza iteratorul valorii, sau finalul container-ului daca valoarea 
cautata nu exista
2. **lower_bound** - returneaza iteratorul primei aparitii a valorii cautate, sau iteratorul celei 
mai mari valori care este mai mica decat valoarea cautata
3. **higher_bound** - returneaza iteratorul ultimei aparitii a valorii cautate, sau interatorul celei
mai mici valori care este mai mare decat valoarea cautata

*Exemplu de implementare:*
```
#include <iostream>
#include <algorithm> //pentru functiile de cautare binara
#define MAXN 1000

using namespace std;

int main() {
    int n, arr[MAXN], x; //vectorul unde se va efectua cautarea binara
    cin >> n >> x;
    for (int i = 0; i < n; i++)
        cin >> arr[i];

    sort(arr, arr + n); //sortare din STL
    cout << binary_search(arr, arr + n, x) - arr << '\n';
    cout << lower_bound(arr, arr + n, x) - arr << '\n';
    cout << higher_bound(arr, arr + n, x) - arr << '\n';
    return 0;
}
```

### Algoritmul "discret" de cautare binara

Pana acum, am prezentat cautarea binara doar pe o secventa definita in memorie, insa acest
algoritm de cautare poate fi folosit intr-un mod mult mai abstract. O secventa este doar
o functie cu mai multe valori salvate insotite de un indice. Astfel cautarea binara poate fi
folosita pe orice functie monotona, a carui domeniu este o multime de numere. Zona de cautare
este defapt doar un interval de valori din domeniul de definitie a functiei respective.

Cand crezi ca o problema se poate rezolva prin cautare binara, mereu va trebui sa gasesti o cale
de a demonstra ca intradevar se poate rezolva prin acest algoritm. Se considera un predicat logic
*p* definit alaturi de o multime *S* (zona de cautare). Zona de cautare S consista in mai multe solutii
posibile ale problemei. In acest articol, drept exemplu, predicatul *p* este o functie care va
returna o solutie booleana (*1* sau *0*). Predicatul verifica daca o solutie este valida sau nu (*da* 
sau *nu*).

In acest context, cautarea binara poate fi folosita numai daca pentru fiecare *x* in *S*, **x > y**, 
**p(x) = 1** daca **p(y) = 1**, iar pentru **x < y**, **p(x) = 0**, in cazul in care *p(y)* se afla 
pe varful graficului predicatului *p*. Pe scurt, cautarea binara poate fi folosita pentru un predicat 
in care vei avea ca raspuns pozitiv orice valoare mai mare ca *x*, daca **p(x) = 1**, iar orice raspuns 
va fi negativ pentru orice valoare mai mica ca *y*, daca **p(y) = 0**. Putem spune ca aceste conditii se 
numesc teorema principala.

Daca o problema satisface teorema principala a cautarii binare, atunci putem gasi cea mai mica valoare *x*
din *S*, care va da un rezultat pozitiv in urma folosiri acesteia in predicatul *p* **(p(x) = 1)**.

Un exemplu al aplicarii algoritmului de cautare binara "discret" se poate vedea in urmatorul cod sursa.
Predicatul *p* apare drept o functie care va da un raspuns pozitiv (*da*) pentru orice valoare mai mare 
decat *55*. Se va cauta cea mai mare solutie x pentru care **p(x) = 0**.
```
bool p(int x) {
    return x > 55;
}

/*
    functia care va gasi raspunsul maxim
    lo si hi delimita zona de cautare
    lo - inceputul intervalului a zonei de cautare
    hi - sfarsitul intervalului a zonei de cautare
*/
int findMin(int lo, int hi) {
    while (lo < hi>) {
        int mid = lo + (hi - lo) / 2;

        //delimitam zonele de cautare
        if (p(mid))
            hi = mid - 1;
        else
            lo = mid + 1;
    }

    /*
        in lo se va afla rezultatul cautarii binare
        daca p(lo) = 1 inseamna ca nu exista niciun rezultat fals
        in zona de cautare delimitata de lo si hi
    */
    if (p(lo))
        return -1;
    return lo;
}
```

### Probleme
* Problema **"buldo"** din *OJI2020*. Se afla pe acest site.
* Toate problemele cu prefixul **"cb"** de pe pbinfo.
* Problema **"Cautare binara"** de pe infoarena. [link](https://infoarena.ro/problema/cautbin)