public class WhileTest {
    public static void main(String[] args) {
        // 가장 기본적인 while 루프의 형태입니다.
        // while 루프를 작성하는 방법

        // 1. 먼저 while을 적고 소괄호를 열고 닫고 중괄호를 열고 닫습니다.
        // 2. 소괄호 내부에는 if 문과 마찬가지로 조건을 적습니다.
        // 3. 조건이 만족하는 동안 동작시킬 코드를 중괄호 내부에 적습니다.

        // 현재 예에서는 조건이 항상 true(참) 이므로
        // 무한 반복을 하게 됩니다.
        
        // false를 직접 집어넣을 경우: unreachable statement가 나오면서
        // 루프 내부에 도달할 수 없음을 알리는 에러 메시지가 나타남

        // 모든 제어문(if, for, while 등)에서 사용하는 조건은
        // 반드시 결과가 true 혹은 false 로 나타나게 됨
        while(true) {
            System.out.println("안녕 숫가락으로 n번 맞으면 죽을수도 있데");
        }
    }
}
