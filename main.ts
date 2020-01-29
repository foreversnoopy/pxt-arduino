namespace sensors {
    export class ArduinoIICSensor extends sensors.internal.IICSensor {

        iicAddress: number

        constructor(port: number, iicAddress: number) {
            super(port)
            this.iicAddress = iicAddress
        }

        getDHT() {
            this.transaction(this.iicAddress, [], 8)
            const bytes = this.getBytes()
            const h: number = bytes.getNumber(NumberFormat.Float32LE, 0)
            const t: number = bytes.getNumber(NumberFormat.Float32LE, 4)
            return [h, t]
        }

        getAll() {
            return this.getDHT()
        }

        _IICId() {
            return 'ArduinoIIC'
        }
    }
}
