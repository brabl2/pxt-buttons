
//% color=#D400D4 weight=111 icon="\uf192" block="Buttons Ena/Dis"
namespace buttons {

    /**
    * Enable the micro:bit buttons A+B (P5 and P11 can be used as GPIOs).
    */
    //% blockId=buttons_ena_AB
    //% block="Enable buttons A+B"
    //% weight=20
    //% shim=buttons::enable
    export function enable(): void { basic.pause(100) }

    /**
    * Disable the micro:bit buttons A+B (P5 and P11 can be used as GPIOs).
    */
    //% blockId=buttons_dis_AB
    //% block="Disable buttons A+B"
    //% weight=20
    //% shim=buttons::disable
    export function disable(): void { basic.pause(100) }

}