public class WhileNumberTest {
    public static void main(String[] args) {
        int i = 0;

        System.out.println("i++은 다음 라인에서 연산이 진행됩니다.");
        // i++에 해당하는 부분
        // 이게 뭐지 ???
        // 여기서 ++의 경우엔 더하기 1과 동일한 개념입니다.
        // i++ < 10은 i 값을 1 더하고 10하고 비교하라는 뜻으로 볼 수 있음
        // i < 10에 대한 조건 검사를 먼저하고
        // while 문의 중괄호(본문)를 실행하기 직전에 값이 증가합니다.
        // 이와 같이 다음 라인에서 연산되는 것을 후위 연산이라고 부른다.
        while(i++ < 10) {
            // 여기서 출력을 하고 다시 while의 조건을 검사하러 올라간다.
            System.out.println(i);
        }

        System.out.println("++i는 해당 라인에서 바로 연산이 진행됩니다.");

        i = 0;

        // 이와 같이 해당 라인에서 바로 연산되는 것을 전위 연산이라고 부른다.
        while(++i < 10) {
            System.out.println(i);
        }

        System.out.println("난 0부터 출력하고 싶다면");

        i = 0;

        while(i < 10) {
            System.out.println(i++);
        }
    }
}
