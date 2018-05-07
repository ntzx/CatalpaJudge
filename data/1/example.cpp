#include<iostream>
using namespace std;
int main()
{
	int n;
	cin>>n;
	int a1=0,a2=0;
	for(int i=1;i<=n;i++)
	{
		if(i%2==0)
		{
			a2+=i;
		}
		else
		{
			a1+=i;
		}
	}
	cout<<a1<<endl;
	cout<<a2<<endl;
	return 0;
}
