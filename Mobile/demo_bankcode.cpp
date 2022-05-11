#include <iostream>
using namespace std;

int main() {
  int bankcode = 1;
  switch (bankcode) {
  case 1:
    cout << "Vietbank";
    break;
  case 2:
    cout << "Sacombank";
    break;
  case 3:
    cout << "Vietcombank";
    break;
  case 4:
    cout << "Eximbank";
    break;
  case 5:
    cout << "Mbbank";
    break;
  case 6:
    cout << "Vietinbank";
    break;
  case 7:
    cout << "Acb";
    break;
  default:
    cout << "Setup bank default";
  }
  return 0;
}
