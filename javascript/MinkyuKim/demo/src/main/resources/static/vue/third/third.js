var app = new Vue ({
    el: '#app',
    data: {
        message: '우왕 뷰 짱',
        initMsg: '양방향 연결이 뭔지 함 볼까 ?',
        list: ['사과', '바나나', '딸기', '수박', '참외', '포도', '망고', '블루베리', '체리'],
        show: true,
        num: 3,
        count: 0,
        radius: 50,
        randomNumber: 0,  
        shopView: false,
        shopList: [],
        shopListValue: [],
        // 배열로 만들어보기      
        characterStatus: {
            level: 1,
            hp: 70,
            mp: 30,
            atk: 10,
            str: 10,
            intelligence: 10,
            dex: 10,
            vit: 10,
            def: 10,
            men: 0,
            // 전체 필요 경험치량
            totalLevelBar: 10,
            // 현재 누적한 경험치량
            currentLevelBar: 0,
            money: 0
        },
        monsterName: '',
        monsters: [
            { id: 1, name: '슬라임', hp: 30 },
            { id: 2, name: '고블린', hp: 50 },
            { id: 3, name: '카오스 드래곤', hp: 99999999 }
        ],
        monsterBook: [
            { name: '슬라임', hp: 30, exp: 1, money: 100 },
            { name: '고블린', hp: 50, exp: 5, money: 500},
            { name: '레드 슬라임', hp: 70, exp: 500, money: 1000 },
            { name: '홉 고블린', hp: 120, exp: 1000, money: 2000 },
            { name: '그린 슬라임', hp: 150, exp: 2000, money: 3000 },
            { name: '스켈레톤', hp: 200, exp: 4000, money: 4000 },
            { name: '고블린 마법사', hp: 250, exp: 8000, money: 5000 },
            { name: '블루 슬라임', hp: 300, exp: 10000, money: 6000 },
            { name: '트롤', hp: 500, exp: 15000, money: 7000 },
            { name: '원혼', hp: 700, exp: 30000, money: 8000 },
            { name: '고블린 족장', hp: 800, exp: 40000, money: 9000 },
            { name: '스켈레톤 기사', hp: 1000, exp: 50000, money: 10000 },
            { name: '오우거', hp: 1200, exp: 60000, money: 20000 },
            { name: '오우거 메이지', hp: 1500, exp: 100000, money: 30000 },
            { name: '스켈레톤 근위병', hp: 2000, exp: 200000, money: 40000 },
            { name: '고블린 대사장', hp: 2500, exp: 400000, money: 50000 },
            { name: '귀인', hp: 2800, exp: 100000, money: 60000 },
            { name: '킹 슬라임', hp: 3000, exp: 4000000, money: 70000 },
            { name: '고스트', hp: 3200, exp: 10000000, money: 80000 },
            { name: '리치', hp: 9000, exp: 500000000, money: 90000 },
            { name: '리치 킹', hp: 90000, exp: 99999999999, money: 1000900000 },
            { name: '카오스 드래곤', hp: 99999999, exp: 999999999999999999, money: 5666750055556 },
            { name: '리무루 템페스트', hp: 999999999999999, exp: 9999999999999999999999, money: 999999999999999 }
        ],
        itemBook: [
            { name: 'HP 포션 I', price: 50, effect: {desc: 'hp 회복', amount: 200}},
            { name: 'HP 포션 II', price: 200, effect: {desc: 'hp 회복', amount: 700}},
            { name: 'HP 포션 III', price: 1000, effect: {desc: 'hp 회복', amount: 2000}},
            { name: 'HP 포션 IV', price: 6000, effect: {desc: 'hp 회복', amount: 6000}},
            { name: 'HP 포션 V', price: 42000, effect: {desc: 'hp 회복', amount: 15000}},
            { name: '검', price: 1000000, effect: {desc: '무기', atk: 100}},
            { name: '강철검', price: 10000000, effect: {desc: '무기', atk: 200}},
            { name: '환두대도', price: 50000000, effect: {desc: '무기', atk: 350}},
            { name: '발라리아 검', price: 150000000, effect: {desc: '무기', atk: 500}},
            { name: '칠지도', price: 10000000000, effect: {desc: '무기', amount: 10000}}
        ]
    },
    methods: {
            purchaseButton: function () {
            // 아이템 리스트 목록을 가져온다.
            // 버튼을 눌러 구매를 진행하고, 아이템 구매 시 소지금에서 차감시킨다.
            // 만약 소지금이 부족할시 아이템 구매는 이어지지 않고, 소지금이 부족하다고 알린다.
            // 구매가 완료되면 아이템은 인벤토리 창으로 옮겨진다.

            }


        shuffleShopList() {
            if(!this.shopView) {
                this.shopListValue = []
            }

            for(var i = 0; i < 10; i++) {
                var randIdx = Math.floor(Math.random() * this.itemBook.length)
                this.shopList[i] = this.itemBook[randIdx]
            }

        },
        buttonClickTest: function (event) {
            alert('뷰 짱')
        },
        increment: function () {
            this.count += 1
        },
        addMonster: function () {
            var max = this.monsters.reduce( function (a, b) {
                return a > b.id ? a : b.id
            }, 0)

            var randNum = Math.floor(Math.random() * this.monsterBook.length);

            this.monsters.push({
                id: max + 1,
                name: this.monsterBook[randNum].name,
                hp: this.monsterBook[randNum].hp
            })
        },
        addManyMonster () {
            //100마리씩 추가
            for (var i = 0; i < 100; i++) {
                var max = this.monsters.reduce(function(a, b) {
                    return a > b.id ? a : b.id 
            }, 0)

            var monBookLen = this.monsterBook.length
            var idx = Math.floor(Math.random() * monBookLen)

            this.monsters.push({
                id: max + 1,
                name: this.monsterBook[idx].name,
                hp: this.monsterBook[idx].hp
            })
        }
        },
        removeMonster: function (index) {
            this.monsters.splice(index, 1);
        },
        userAttack: function (index) {
            this.monsters[index].hp -=  this.characterStatus.atk
        },
        randomGeneration () {
            this.randomNumber = Math.floor(Math.random() * 10) + 1;
        },
        myDarknessDragon () {
            for(var i = 0; i < this.monsters.length; i++) {
                this.monsters[i].hp = parseInt(this.monsters[i].hp - this.characterStatus.atk * 3.5) 
            }
        }
    },
    beforeCreate() {
        console.log('Vue 객체를 만들기 이전입니다.')
    },
    created() {
        console.log('Vue 객체를 만들었습니다.')
    },
    beforeMount() {
        console.log('HTML 요소를 붙이기 전입니다.')
    },
    mounted() {
        console.log('HTML 요소를 붙입니다.')
    },
    // 몬스터가 죽는시점이므로, 레벨업, 경험치업은 여기에 적용시켜야 한다.
    beforeUpdate() {
        console.log('VDOM의 변화를 감지합니다.')

        var i
        for (i = 0; i < this.monsters.length; i++) {
            if (this.monsters[i].hp <= 0) {

            // 몬스터가 삭제(죽을)되는 곳이므로 이 전에 경험치를 적용시켜야한다.
                            // 몬스터 제거 이전에 무엇을 해야할까요 ? 경험치 획득
                for (var j = 0; j < this.monsterBook.length; j++) {
                    if (this.monsters[i].name === this.monsterBook[j].name) {
                        this.characterStatus.currentLevelBar += this.monsterBook[j].exp
                        this.characterStatus.money += this.monsterBook[j].money                        
                    }
                }
                this.monsters.splice(i, 1)
            }
        }

        var criteria = this.characterStatus.currentLevelBar        

        for(; this.characterStatus.currentLevelBar >= this.characterStatus.totalLevelBar; ) {
            this.characterStatus.currentLevelBar =
                parseInt(this.characterStatus.currentLevelBar -
                    this.characterStatus.totalLevelBar)
            this.characterStatus.level += 1
            this.characterStatus.hp *= 1.2
            this.characterStatus.atk += 100
            this.characterStatus.def +=1

            //레벨링 시스템 구축
            if (this.characterStatus.level < 10) {
                this.characterStatus.totalLevelBar = parseInt(this.characterStatus.totalLevelBar * 1.1)
            } else if (this.characterStatus.level < 20) {
                this.characterStatus.totalLevelBar = parseInt(this.characterStatus.totalLevelBar * 1.2)
            } else if (this.characterStatus.level < 30) {
                this.characterStatus.totalLevelBar = parseInt(this.characterStatus.totalLevelBar * 1.3)
            } else if (this.characterStatus.level < 40) {
                this.characterStatus.totalLevelBar = parseInt(this.characterStatus.totalLevelBar * 1.4)
            } else if (this.characterStatus.level < 50) {
                this.characterStatus.totalLevelBar = parseInt(this.characterStatus.totalLevelBar * 1.5)
            } else if (this.characterStatus.level < 80) {
                this.characterStatus.totalLevelBar = parseInt(this.characterStatus.totalLevelBar * 1.7)
            } else if (this.characterStatus.level < 100) {
                this.characterStatus.totalLevelBar = parseInt(this.characterStatus.totalLevelBar * 2)
            }
        } 
    },
    updated() {
        console.log('VDOM의 변화를 적용합니다.')
    },
    beforeDestroy() {
        console.log('Vue 객체를 파괴하기 이전입니다.')
    },
    destroyed() {
        console.log('Vue 객체를 파괴하였습니다.')
    }
})