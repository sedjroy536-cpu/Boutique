function commander(produit, prix) {
    let numero = "22890766459"; // TON NUMERO ICI

    let message = "Bonjour, je veux commander : " 
                + produit + " - Prix: " + prix + "F";

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}