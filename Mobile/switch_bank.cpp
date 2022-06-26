#include <iostream>
using namespace std;

int main() {
  int code = 56356001;
  switch (code) {
  case 56356001:
    cout << "Vietbank";
    break;
  case 60303001:
    cout << "Sacombank";
    break;
  case 79203010:
    cout << "Vietcombank";
    break;
  case 79305008:
    cout << "Eximbank";
    break;
  case 79311005:
    cout << "Mbbank";
    break;
  case 51201001:
    cout << "Vietinbank";
    break;
  case 36307001:
    cout << "Acb";
    break;
  default:
    cout << "Setup bank default";
  }
  return 0;
}
