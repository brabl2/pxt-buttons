
//% color=#D400D4 weight=110 icon="\uf192" block="Buttons Disable"
namespace buttons {

    /**
    * Disable the micro:bit(V2) button A (P5 can be used as GPIO).
    */
    //% blockId=buttons_dis_A
    //% block="disable button A"
    //% weight=29
    //% shim=buttons::disableA
    export function disableA(): void { basic.pause(100) }

    /**
    * Disable the micro:bit(V2) button B (P11 can be used as GPIO).
    */
    //% blockId=buttons_dis_B
    //% block="disable button B"
    //% weight=28
    //% shim=buttons::disableB
    export function disableB(): void { basic.pause(100) }

    /**
    * Disable the micro:bit(V2) buttons A and B (P5 and P11 can be used as GPIOs).
    */
    //% blockId=buttons_dis_AB
    //% block="disable buttons A and B"
    //% weight=27
    //% shim=buttons::disable
    export function disable(): void { basic.pause(100) }

    /**
    * Enable the micro:bit(V2) button A (P5 can be used as GPIO).
    */
    //% blockId=buttons_ena_A
    //% block="enable button A"
    //% weight=19
    //% shim=buttons::enableA
    export function enableA(): void { basic.pause(100) }

    /**
    * Enable the micro:bit(V2) button B (P11 can be used as GPIO).
    */
    //% blockId=buttons_ena_B
    //% block="enable button B"
    //% weight=18
    //% shim=buttons::enableB
    export function enableB(): void { basic.pause(100) }

    /**
    * Enable the micro:bit(V2) buttons A and B (P5 and P11 can be used as GPIOs).
    */
    //% blockId=buttons_ena_AB
    //% block="enable buttons A and B"
    //% weight=17
    //% shim=buttons::enable
    export function enable(): void { basic.pause(100) }

}