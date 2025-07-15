public class Etudiant {

    private String nom;
    public static String school = "les loges";

    Etudiant(String nom) { // constructeur
        this.nom = nom;
    }

    public String getNom() {
        return this.nom;
    }

    public void Travailler() {
        System.out.println(this.nom + " se met au travail !" + school);
    }

    public void seReposer() {
        System.out.println(this.nom + " se repose.");
    }

    public static void main(String[] arg) {
        Etudiant etudiant = new Etudiant("toto");
        String testn = etudiant.getNom();
        System.out.println(testn);
        etudiant.Travailler();
        etudiant.seReposer();
        Etudiant.exostat();
        Etudiant etudiant2 = new Etudiant("vasi");
        etudiant2.Travailler();
        Etudiant.school = "Saclay";
        etudiant2.Travailler();
        etudiant.Travailler();
    }

    public static void exostat() {
        System.out.println("je suis une methode static");
    }
}
