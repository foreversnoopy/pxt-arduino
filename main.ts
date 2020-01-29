namespace sensors {
    class ArduinoIICSensor extends sensors.internal.IICSensor {

        getDHT() {
            this.transaction(16, [], 8)
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

    //export const arduino1 = new ArduinoIICSensor(1)
}
