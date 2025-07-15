class Course {
    String nom;
    int vitesseMax;
    int acceleration;
    int distance;
    int tempsDuCourse;

    public Course(String nom, int vitesseMax, int acceleration) {
        this.nom = nom;
        this.vitesseMax = vitesseMax;
        this.acceleration = acceleration;
    }

    public void Parcours(int distance, int tempsDuCourse) {
        this.distance = distance;
        this.tempsDuCourse = tempsDuCourse;
    }
}
