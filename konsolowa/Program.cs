using System;

namespace konsolowka6112026
{
    class CustomArray
    {
        private int[] array;
        private int size;

        public CustomArray(int size)
        {
            this.size = size;
            this.array = new int[size];

            Random random = new Random();
            for (int i = 0; i < size; i++)
            {
                this.array[i] = random.Next(1, 1001);
            }
        }
        public void DisplayAll()
        {
            for (int i = 0; i < size; i++)
            {
                Console.WriteLine($"{i}: {array[i]}");
            }
        }
        //nazwa metody: FindFirst
        //opis metody: Wyszukuje pierwsze wystąpienie wartości w tablicy
        //parametry: value - wartość całkowitado wyszukania w tablicy
        //zwracany typ i opis: int - indeks znalezionego elementu lub -1, gdy nie znaleziono
        //autor: 00000000000
        public int FindFirst(int value)
        {
            for (int i = 0; i < size; i++)
            {
                if (array[i] == value)
                {
                    return i;
                }
            }
            return -1;
        }
        public int DisplayOdd()
        {
            int count = 0;
            Console.WriteLine("Liczby nieparzyste: ");
            for (int i = 0; i < size; i++)
            {
                if (array[i] % 2 != 0)
                {
                    Console.WriteLine(array[i]);
                    count++;
                }
            }
            return count;
        }
        public double CaclulateAverage()
        {
            if (size == 0) return 0;

            long sum = 0;
            for (int i = 0; i < size; i++)
            {
                sum += array[i];
            }
            return (double)sum / size;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            CustomArray customArray = new CustomArray(25);
            Console.WriteLine("Wszytkie elementy tablicy");
            customArray.DisplayAll();

            int searchValue = 500;
            int foundIndex = customArray.FindFirst(searchValue);
            if (foundIndex != -1)
            {
                Console.WriteLine($"Wartość {searchValue} znaleziona na indekse: {foundIndex}");
            }

            int oddCount = customArray.DisplayOdd();
            Console.WriteLine($"Razem nieparzystych: {oddCount}");

            double avg = customArray.CaclulateAverage();
            Console.WriteLine($"Średnia wszystkich elementów: {avg:F2}");
        }
    }
}
