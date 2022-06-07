## Cerinta
Dorești să nivelezi terenul pe care l-ai cumpărat, care are lățimea de 1 metru și lungimea de N metri, fiind alcătuit din *N* zone succesive, fiecare zonă având lungimea de 1 metru. Terenul se reprezintă ca un șir de *N* numere naturale *h1*, *h2*, *h3*, *…*, *hN* reprezentând înălțimile în metri pe care le au zonele din terenul inițial, privite de la stânga spre dreapta.

Pentru a nivela terenul ai închiriat un buldozer care funcționează astfel. Se alege o înălțime *H* (număr natural) la care ridicăm lama buldozerului. Inițial buldozerul are pe lamă o cantitate *C=0* metri cubi de pământ. Buldozerul începe să mergă de la stânga la dreapta și când ajunge la zona *i*, în funcție de înălțimea *hi* a acesteia, se va afla în una dintre următoarele situații:
* dacă *hi ≥ H* atunci cantitatea suplimentară *hi - H* se adaugă la *C* și nivelul zonei ajunge la *H*.
* dacă *hi < H* atunci se scade din *C* diferența *H - hi* pentru a aduce nivelul zonei la nivelul *H*.

Remarcăm faptul că *H* trebuie ales inițial astfel încât de fiecare dată când buldozerul ajunge în a doua situație să aibă pe lamă suficient pământ (*C ≥ H - hi*). După ce buldozerul parcurge cele *N* zone de lungime *1* pe lama buldozerului e posibil să mai rămână pământ, dar asta nu te interesează, pentru că la capătul din dreapta al terenului este un râu, și pământul rămas se va vărsa acolo.

## Intrare
Se citeste din fisierul "buldo.in".

## Iesire
Se scrie in fisierul "buldo.out".

## Restrictii si precizari
* 1 ≤ N ≤ 100.000
* Înălțimile sunt numere naturale, 1 ≤ hi ≤ 1.000.000.000, pentru orice i, 1≤i≤N.
* Pentru teste în valoare de 50 de puncte, N ≤ 1000 și hi ≤ 1000, pentru orice i, 1≤i≤N.
* În concurs s-au acordat 90 de puncte, și 10 punte din oficiu. Pe site se acordă 10 puncte pentru exemplu.