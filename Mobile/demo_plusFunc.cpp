#include <iostream>
using namespace std;

// This example overload the plusFunc function to work for both int and double
int plusFunc(int x, int i) {
  return x + i;
}

double plusFunc(double x, double i) {
  return x + i;
}

int main() {
  int myNum1 = plusFunc(8, 5);
  double myNum2 = plusFunc(0.51, 5000.00);
  cout << "$" << myNum1 << "\n";
  cout << "$" << myNum2;
  return 0;
}
