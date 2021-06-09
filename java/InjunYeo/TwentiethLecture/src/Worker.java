public class Worker implements Runnable{

    private Counter counter;
    private boolean increment;
    private int count;

    public Worker(Counter counter,boolean increment,int count){
        this.counter = counter;
        this.increment = increment;
        this.count = count;
    }

    @Override
    public void run() {
        for(int i=0;i<this.count;i++){
            if(increment){
                this.counter.increment();
                System.out.println("increment");
                System.out.println(counter.getCount());

            }
            else{
                this.counter.decrement();
                System.out.println("decrement");
                System.out.println(counter.getCount());
            }
        }
    }
}
