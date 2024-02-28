controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    you.setVelocity(0, -50)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    shot = sprites.create(img`
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . f . . 2 . . f . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    sprites.destroy(you, effects.clouds, 500)
})
function doSomething () {
    if (you.isHittingTile(CollisionDirection.Top)) {
        sprites.destroy(you, effects.clouds, 500)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -1
    scene.cameraShake(4, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    sprites.destroy(you, effects.clouds, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    sprites.destroy(you, effects.clouds, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand2, function (sprite, location) {
    sprites.destroy(you, effects.clouds, 500)
})
let shot: Sprite = null
let you: Sprite = null
let statusbar: StatusBarSprite = null
game.showLongText("DONT LET THE CUCUI KILL U", DialogLayout.Center)
statusbar = statusbars.create(60, 8, StatusBarKind.Health)
statusbar.positionDirection(CollisionDirection.Top)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999959999999999999999999999999999999999999999999999999999999999999999999999999999999599999999999
    9999999999999999999999959999999999999999999999999999999999333999999555999999999999999999999999999999999599999999999999999999999999999999999999999995559999999999
    9999339999999993333333555339999999999999999933333333399993333399995555539999933999999999999999999999995559999999999999999999999999999999999999999955555399999999
    3333333333333333333333353339999933333333333333333333333333333333333555333999933333339999999933399999333539999999999999933333333333333333339999999935553399999999
    3333333333333333333333333333333333333333333333333111333333333333333535333333333333333333333333333333333339999933333333333333333331113333333333399935353333999999
    33333d11d3333333333333333333333333333333333333331111133333333333333333333333333333333d11d33333333333333333333333333333333333333311111333333333333333333333333333
    33331111113333333333333333333333333333333331133111111d3333333333333333333333333333331111113333333333333333333333333333333331133111111d33333333333333333333333333
    3331111111d33333333333333333333333333333331111d1111111133333333333333333333333333331111111d33333333333333333333333333333331111d111111113333333333333333333333333
    33311111111d11333333333333333333333333333d1111111111111d33333333333333333333333333311111111d11333333333333333333333333333d1111111111111d333333333333333333333333
    331111111111111333333333333333333333333d11111111111111111d3333333333333333333333331111111111111333333333333333333333333d11111111111111111d3333333333333333333333
    1d1111111111111d31113333333333333333333333333333333333333333333366633333333333311d1111111111111d3111333333333333333333333333333333333333333333336663333333333331
    1111111111111111111113333333333333333333333333333333333333333336776633333333331111111111111111111111133333333333333333333333333333333333333333367766333333333311
    1111111111166666111113333333333333533333333333333333333333333366777633333333331111111111111666661111133333333333335333333333333333333333333333667776333333333311
    111111111166777661111111d333333335553333333333333333333333333367777663333333d111111111111166777661111111d333333335553333333333333333333333333367777663333333d111
    3333333336677777663333333333333355555333333333333333333333333367777763333333333333333333366777776633333333333333555553333333333333333333333333677777633333333333
    3333333336777777763333333333333335553333333333333333333333333367777763333333333333333333367777777633333333333333355533333333333333333333333333677777633333333333
    3333333366777777766333333333333335353333333333333333333333333367777763333333333333333333667777777663333333333333353533333333333333333333333333677777633333333333
    3333333367777777776333333333333333333333333333333335333333333367777763333333333333333333677777777763333333333333333333333333333333353333333333677777633333333333
    3333333367777777776333366333333333333333333333333355533333333367777763333333333333333333677777777763333663333333333333333333333333555333333333677777633333333333
    3333333367777777776333677633333333333333333333333335333336633367777763333333333333333333677777777763336776333333333333333333333333353333366333677777633333333333
    3333333367777777776336677663333333333333333333333333333367763367777763333333333aaaaaaaaa6777777777633667766333333333333333333333333333336776336777776333aaaaaaa3
    3333333367777777776336777763333333aaa33333333333333aaaaa67763a6777776aaaaa33aaaaaaaaaaaa6777777777633677776333333aaaa33333333333333333336776336777776aaaaaaaaaaa
    aaaaaaaa6777777777633677776333333aaaa3333333aaa3333aaaaa6776aa6777776aaaaaaaaaaaaaaaaaaa6777777777633677776aaaa3aaaaa333333aaaaaaaaa33336776336777776aaaaaaaaaaa
    6666aaaa6777777777666677776333333aaaa6666663aaaaaaaaaaaa6776aa6777776aaaaaaaaaa66666aaaa6777777777666677776aaaaaaaaaa666666aaaaaaaaaaaaa6776336777776aaaaaaaaaaa
    77766aaa6777777777777777776aaaaaaaaa66666666aaaaaaaaaaaa6776aa6777776aaa66aaaa6677766aaa6777777777777777776aaaaaaaaa6666666aaaaaaaaaaaaa6776336777776aaa66aaaa66
    77776aaa677777777777777776aaaaaaaaa6666666666aaaaaaaaaaa6776aa6777776aa6766aa66777776aaa677777777777777776aaaaaaaaa6666666666aaaaaaaaaaa6776336777776aa6766aa667
    777776aa677777777777777766aaaaaaaaa6666666666aaaaaaaaaaa6776aa6777776aa6776aa677777776aa677777777777777766aaaaaaaaa6666666666aaaaaaaaaaa6776336777776aa6776aa677
    777776aa67777777776666666aaaaaaaaa66666666666aaaaaaaaaaa6776aa6777776aa6776aa677777776aa67777777776666666aaaaaaaaa66666666666aaaaaaaaaaa6776336777776aa6776aa677
    7777776a67777777776aaaaaaaaaaaaaaa66666666666aaaaaaaaaaa6777666777776aa7776aa6777777776a67777777776aaaaaaaaaaaaaaa66666666666aaaaaaaaaaaa777666777776a67776aa677
    7777776a67777777776aaaaaaaaaaaaaaa666666666666aaaaaaaaaa6677777777776667776666777777776a67777777776aaaaaaaaaaaaaaa666666666666aaaaaaaaaaa67777777777666777666677
    7777776a67777777776aaa666666666aaa666666666666aaaaaaaaaaa667777777777667766667777777776a67777777776aaa66666666aaaa666666666666aaaaaaaaaaa66777777777766776666777
    7777776667777777776a6667777777666a666666666666aaaaaaaaaaaa66667777777777766667777777776667777777776a6667777777666a666666666666aaaaaaaaaaaa6666777777777776666777
    7777776667777777776667777777777766666666666666aaaa666666aaaa667777777777766667777777776667777777776667777777777766666666666666aaaa666666aaaaa6777777777776666777
    7777776667777777776677777777777776666666666666a6667777766aaaa67777777777666667777777776667777777776677777777777776666666666666a66677777666aaa6777777777766666777
    77777776677777777767777777777777776666666666666677777777766aa677777766666666677777777776677777777767777777777777776666666666666677777777766aa6777777666666666777
    777777766777777776677777777777777766666666666667777777777766a6777777666666666777777777766777777776677777777777777766666666666667777777777766a6777777666666666777
    7777777667777777767777777777777777766666666666777777777777766677777766666666677777777776677777777677777777777777777666666666667777777777777666777777666666666777
    7777777667777777667777777777777777766666666666777777777777766677777766666666677777777776677777776677777777777777777666666666667777777777777666777777666666666777
    7777777667777777677777777777777777776666666666777777777777766677777766666666677777777776677777776777777777777777777766666666667777777777777666777777666666666777
    7777777667777733333333777777777777776666666666777777773333333377777766666666677777777776677777333333337777777777777766666666667777777733333333777777666666666777
    777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777
    7777777666333ddddddddddd33377777777766666666667777333ddddddddddd33376666666667777777777666333ddddddddddd33377777777766666666667777333ddddddddddd3337666666666777
    77777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd3336666666677777777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd33366666666777
    7777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd3333666667777777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd333366666777
    33777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd33333333333777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd333333333
    d33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33ddddd
    ddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333ddddddd
    ddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33dddddddddd
    ddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33dddddddddddd
    dddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddd
    dddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddd
    dddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddd
    dddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
you = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f e e e e f f f f f 
    f f f f b e e e e b f f f f 
    f f f a 3 e e e e 3 a f f f 
    . f 3 3 e e e e e e 3 3 f . 
    . f e e e e b b e e e e f . 
    . f f e e b b b b e e f f . 
    . f f f b f b b f b f f f . 
    . f f 5 1 f d d f 1 5 f f . 
    . . f f d d d d d d f f . . 
    . . f f f 2 2 2 2 f f f . . 
    . f 2 f 2 3 3 3 3 2 f 2 f . 
    . b d f 3 3 3 3 3 3 c d b . 
    . b b f 6 6 8 8 6 6 f b b . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
let list1 = [tilemap`level2`, tilemap`level3`]
let list2 = [tilemap`level4`, tilemap`level5`]
tiles.setCurrentTilemap(list1._pickRandom())
controller.moveSprite(you)
let cucui = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c 8 8 c 
    f f c 3 c c 3 c c f f 8 8 8 c . 
    f f c 3 8 c 3 8 c f 8 8 c c c . 
    f c 8 8 8 8 8 8 c f 8 c 8 c c . 
    c c 1 8 8 8 1 8 c 8 8 c 8 8 c . 
    c 8 8 8 8 8 8 8 8 8 c c c 8 c . 
    c 8 1 f f 1 c 8 8 c c c c c . . 
    c f 1 f f 1 f 8 8 8 8 f c . . . 
    f f f f f f f 8 8 8 8 f c . . . 
    f f 2 2 2 2 f 8 8 8 8 f c c . . 
    . f 2 2 2 2 2 8 8 8 c f . . . . 
    . . f 2 2 2 8 8 8 c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
cucui.follow(you, 50)
tiles.placeOnTile(cucui, tiles.getTileLocation(15, 6))
scene.cameraFollowSprite(you)
tiles.placeOnTile(you, tiles.getTileLocation(1, 12))
you.ay = 200
