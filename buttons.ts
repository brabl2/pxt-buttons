
//% color=#D400D4 weight=110 icon="\uf192" block="Buttons Disable"
namespace buttons {

    /**
    * Disable the micro:bit button A (P5 can be used as GPIO).
    */
    //% blockId=buttons_dis_A
    //% block="Disable button A"
    //% weight=29
    //% shim=buttons::disableA
    export function disableA(): void;

    /**
    * Disable the micro:bit button B (P11 can be used as GPIO).
    */
    //% blockId=buttons_dis_B
    //% block="Disable button B"
    //% weight=28
    //% shim=buttons::disableB
    export function disableB(): void;

    /**
    * Disable the micro:bit buttons A+B (P5 and P11 can be used as GPIOs).
    */
    //% blockId=buttons_dis_AB
    //% block="Disable buttons A+B"
    //% weight=27
    //% shim=buttons::disable
    export function disable(): void { basic.pause(100) }

    /**
    * Enable the micro:bit button A (P5 can be used as GPIO).
    */
    //% blockId=buttons_ena_A
    //% block="Enable button A"
    //% weight=19
    //% shim=buttons::enableA
    export function enableA(): void;

    /**
    * Enable the micro:bit button B (P11 can be used as GPIO).
    */
    //% blockId=buttons_ena_B
    //% block="Enable button B"
    //% weight=18
    //% shim=buttons::enableB
    export function enableB(): void;

    /**
    * Enable the micro:bit buttons A+B (P5 and P11 can be used as GPIOs).
    */
    //% blockId=buttons_ena_AB
    //% block="Enable buttons A+B"
    //% weight=17
    //% shim=buttons::enable
    export function enable(): void { basic.pause(100) }

}