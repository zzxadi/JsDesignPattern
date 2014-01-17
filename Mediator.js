<div id="results"></div>
    <script>
        function Player(name) {
            this.points = 0;
            this.name = name;
        }
        Player.prototype.play = function () {
            this.points += 1;
            mediator.played();
        };
        var scoreboard = {

            // 显示内容的容器
            element: document.getElementById('results'),

            // 更新分数显示
            update: function (score) {
                var i, msg = '';
                for (i in score) {
                    if (score.hasOwnProperty(i)) {
                        msg += '<p><strong>' + i + '<\/strong>: ';
                        msg += score[i];
                        msg += '<\/p>';
                    }
                }
                this.element.innerHTML = msg;
            }
        };

        var mediator = {

            // 所有的player
            players: {},

            // 初始化
            setup: function () {
                var players = this.players;
                players.home = new Player('Home');
                players.guest = new Player('Guest');
            },

            // play以后，更新分数
            played: function () {
                var players = this.players,
                    score = {
                        Home: players.home.points,
                        Guest: players.guest.points
                    };

                scoreboard.update(score);
            },

            // 处理用户按键交互
            keypress: function (e) {
                e = e || window.event; // IE
                if (e.which === 49) { // 数字键 "1"
                    mediator.players.home.play();
                    return;
                }
                if (e.which === 48) { // 数字键 "0"
                    mediator.players.guest.play();
                    return;
                }
            }
        };

        // go!
        mediator.setup();
        window.onkeypress = mediator.keypress;

        // 30秒以后结束
        setTimeout(function () {
            window.onkeypress = null;
            console.log('Game over!');
        }, 30000);
    </script>