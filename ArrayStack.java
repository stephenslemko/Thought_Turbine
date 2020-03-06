import java.lang.System;
/*
 Array implementation of stacks.
*/

 
public class ArrayStack implements Stack {
    /* Declare a class constant called DEFAULT_STACK_SIZE with the value 10.
    */
    final static int DEFAULT_STACK_SIZE = 10;
   
    
    /* Declare two instance variables:
       1. an integer called topOfStackIndex
       2. a reference variable of type array of objects.
    */
    int topOfStackIndex;
    Object[] objectArray;

    
    /* Write the one parameter constructor.
       The parameter indicates the size of the stack
       (i.e. the size of the array that represents that stack.)
       Be sure to create the array and initialize each element to null.
	   Initialize the top of stack to be the index of the last location in the array.
    */
    public ArrayStack(int stackSize) {
        objectArray = new Object[stackSize];
        for (int i = 0; i < objectArray.length; ++i) {
            objectArray[i] = null;
        }
        topOfStackIndex = objectArray.length - 1;
    }

    
    /* Write the default (no parameter) constructor.
       Initialize the instance variables by invoking the one parameter constructor
       you just completed. Set the size of the stack to DEFAULT_STACK_SIZE.
       
    */
    public ArrayStack() {
        this(DEFAULT_STACK_SIZE);
    }

    
    /* Write the method to implement the push operation.
       Be sure to first check to see if the stack is full.
       If the stack is full invoke the method expandCapacity to 'grow' the stack.
    */
    public void push(Object newElement) {
        if (topOfStackIndex == 0) {
            expandCapacity();
        }
        objectArray[topOfStackIndex] = newElement;
        --topOfStackIndex;
    }

    /* Write the method to implement peek operation.
       It should throw an EmptyCollectionException if the stack is empty.
       A stub method is provided for you.
       A stub method is a method that is a temporary substitute for yet
       to be developed code.
       The header is correct. The body has no funcitonality except that
       it will satisfy the compiler.
    */
    public Object peek() throws EmptyCollectionException {
        if (isEmpty() ) {
            throw new EmptyCollectionException("Object Array");
        }
        else {
            return objectArray[topOfStackIndex + 1];
        }
    }

    /* Write the pop operation.
       Like the peek operation, pop should throw an EmptyCollectionException if the stack is empty.
       Be sure to set the position from where the element was removed to null.
       Again, a stub method is provide for you.
     */
    public Object pop() throws EmptyCollectionException {
        Object popped;
        if (isEmpty() ) {
            throw new EmptyCollectionException("Object Array");
        }
        else {
            popped = objectArray[topOfStackIndex + 1];
            objectArray[topOfStackIndex + 1] = null;
            ++topOfStackIndex;
            return popped;
        }
    }
   
    /* Write the method isEmpty.
       It returns true if the stack is empty and false otherwise.
     */
    public boolean isEmpty() {
        boolean empty = true;
        if (topOfStackIndex != objectArray.length - 1) {
            empty = false;
        }
        return empty;
    }


    /* Write the method size.
       It returns an integer representing the number of items on the stack.
    */
    public int size() {
        return Math.abs(topOfStackIndex - (objectArray.length - 1) );
    }

    /* This method has been completed for you.
     */
    @Override
    public String toString() {
        return(this.toString());
    }
    
    /* This method is called from the push method when the stack is full.
       It should keep the current stack contents and double the size of the stack.
       Hint: Look at the methods in the Java Arrays class to help you here.
     */
    private void expandCapacity() {
        int newTopIndex = topOfStackIndex + DEFAULT_STACK_SIZE;
        int length = Math.abs(topOfStackIndex - (objectArray.length-1) );
        Object[] newArray = new Object[objectArray.length*2];
        System.arraycopy(objectArray, topOfStackIndex + 1
                                    , newArray, newTopIndex + 1
                                    , length );
        objectArray = newArray;
        topOfStackIndex = newTopIndex;
    }
    
    /* This method is used for testing purposes.
       It is complete. Do not modify this method.
    */
    public int whatIsTopOfStack() {
       return topOfStackIndex;
    }
}