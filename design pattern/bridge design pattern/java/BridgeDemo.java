

public class BridgeDemo {
    public static void main(String[] args) {
      Shape triangle = new Triangle(new RedColor());
      triangle.applyColor();

      Shape circle = new Circle(new BlueColor());
      circle.applyColor();
    }
}
