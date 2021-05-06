export class FeatureService {
    name = "Feature Service"
    count = 0

    countUp() {
        this.count++
    }

    countDown() {
        this.count--
    }
}