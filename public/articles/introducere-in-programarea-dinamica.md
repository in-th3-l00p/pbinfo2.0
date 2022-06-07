<h2 class="text-center text-decoration-underline font-weight-bold">
    Introducerea in programarea dinamica
</h2>
<p>
    Este o metoda de elaborare a algoritmilor, in care problema data este
    descompusa in subprobleme, iar solutia optima a problemei depinde de 
    solutiile optime ale subproblemelor sale. Subproblemele problemei date
    nu sunt independente, ci se suprapun, astfel o abordare prin metoda
    "Divide et impera" ar fi neeficienta, intrucat s-ar ajunge de repetate
    ori la rezolvarea a aceleiasi subprobleme.
</p>
<br />
<p class="text-decoration-underline">
    Rezolvarea unei probleme prin programare dinamica 
    presupune urmatorii pasi:
</p>
<ul>
    <li><p>Se indentifica subproblemele problemei date</p></li>
    <li>
        <p>
            Se alege o structura de date pentru a se retine
            solutiile subproblemelor (ex: un tablou bidimensional)
        </p>
    </li>
    <li>
        <p>
            Se determina solutia optima, prin rezolvarea recurenta a
            subproblemelor in ordinea crescatoare a dimensiunii lor.
        </p>
    </li>
</ul>
<br />
<p class="text-decoration-underline">
    Exemple de probleme care se pot rezolva prin programarea dinamica:
</p>
<p>Sirul lui fibonacci provine din urmatoare relatie de recurenta:</p>
<img class="articolImg" src="../fibonacci-definitie.png" />
<p>Imaginea urmatorului arbore arata modul in care se afla al 5-lea din sir:</p>
<img class="articolImg" src="../fibonacci-programare-dinamica.png" />
<p>
    Dupa cum se poate observa, pentru aflarea celui de al 5-lea termen din sir
    a fost nevoie sa fie calculat de doua ori al treilea termen din sir. Astfel,
    pentru optimizarea rezolvarii se poate salva solutia celui de al 3-lea termen
    din sir intr-o structura de date (ex: hashmap) si sa fie refolosita, fara a
    fi nevoie ca aceasta subproblema sa fie rezolvata din nou.
</p>