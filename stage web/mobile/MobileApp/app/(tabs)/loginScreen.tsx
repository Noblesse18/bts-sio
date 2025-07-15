import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RegisterScreen from "../RegisterScreen";

export default function LoginScreen() {
  // Etat pour stocker les valeurs des champs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // fonction appelée lors du clic sur le bouton

  const handleLogin = () => {
    console.log("Password:", password);
    setIsLoading(true);
    // Validation simple
    if (!email || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    if (!email.includes("@")) {
      alert("Veuillez entrer un email valide");
      return;
    }
    if (password.length < 6) {
      alert("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }
    // Simuler un appel API
    setTimeout(() => {
      setIsLoading(false);
      alert("Connexion réussie !");
    }, 2000);

    // Si tout est ok
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        {/* Titre */}
        <Text style={styles.title}>Connexion</Text>
        {/* Champ Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Ionicons name="mail-outline" size={20} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="exemple@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {/* Champ Mot de passe */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Votre mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        {/* Bouton de connexion */}
        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Connexion..." : "Se connecter"}
          </Text>
        </TouchableOpacity>
        {/* Lien vers inscription */}
        <TouchableOpacity style={styles.linkContainer} onPress={RegisterScreen}>
          <Text style={styles.linkText}>Pas encore de compte ? S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

// Styles de l'écran
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    color: "#007AFF",
    fontSize: 16,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
});
