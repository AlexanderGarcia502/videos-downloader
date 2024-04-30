import { ConcreteSubject } from "./subject";

export class Singleton extends ConcreteSubject {
  private static instance: Singleton;

  /**
   * The ActionSingleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  /**
   * The static method that controls the access to the ActionSingleton instance.
   *
   * This implementation let you subclass the ActionSingleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
