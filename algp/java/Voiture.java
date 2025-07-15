public class Voiture {
    // attribut de l'objet 
    private int Id;
    private String Marque;
    private int Vitesse;
    private int Puissance;

    // variable de class
    // variables dont il n'existe qu'un seul exmplaire 
    // associer a sa classe de définition
    public static int count = 0;

public voiture(byte Id, String Marque, int Vitesse, int Puissance) {
    this.Id = ++count;
    this.Marque = Marque;
    this.Vitesse = Vitesse;
    this.Puissance = Puissance;
}

public String toString(){
    return "id=" + Id + ", marque=" + Marque + ", vitesse=" + Vitesse + ",puissance=" + Puissance;
}