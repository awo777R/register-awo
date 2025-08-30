public class ActividadJava {
    public static void main(String[] args) {
        // 1. Variable con nombre completo
        String nombreCompleto = "Carlos Perez Gomez";
        System.out.println("Nombre Completo: " + nombreCompleto);

        // 2. Contar caracteres
        System.out.println("Cantidad de caracteres: " + nombreCompleto.length());

        // 3. Verificar apellido
        System.out.println("Incluye 'Perez'? " + nombreCompleto.contains("Perez"));

        // 4. Concatenar registros
        String otroNombre = "Sofia Gutierrez";
        String registros = nombreCompleto.concat(" | ").concat(otroNombre);
        System.out.println("Registros unidos: " + registros);

        // 5. Reemplazar nombre
        String nuevoNombre = nombreCompleto.replace("Carlos", "Juan");
        System.out.println("Nombre reemplazado: " + nuevoNombre);

        // 6. Dividir en partes
        String[] partes = nombreCompleto.split(" ");
        System.out.println("Nombre: " + partes[0]);
        System.out.println("Primer apellido: " + partes[1]);
        System.out.println("Segundo apellido: " + partes[2]);

        // 7. Convertir a mayúsculas
        System.out.println("En mayúsculas: " + nombreCompleto.toUpperCase());

        // 8. Eliminar espacios extra
        String conEspacios = "   Carlos Perez Gomez   ";
        System.out.println("Sin espacios extra: '" + conEspacios.trim() + "'");

        // 9. Calificación aleatoria
        int calificacion = (int) Math.round(Math.random() * 100);
        System.out.println("Calificación generada: " + calificacion);
    }
}
