#include <iostream>
using namespace std;

int main() {
    bool esPrimo;

    for (int i = 2; i <= 100; i++) {
        esPrimo = true;
        for (int j = 2; j < i; j++) {
            if (i % j == 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            cout << i << endl;
        }
    }

    return 0;
}