export default class ProposalTally {
  constructor() {
    this.total = 0
    this.yes = 0
    this.no = 0
    this.veto = 0
    this.abstain = 0
    this.turnout = 0
  }

  init(element, total) {
    const subtotal = Number(element.yes_count) + Number(element.no_count) + Number(element.abstain_count) + Number(element.no_with_veto_count)
    if (total < 1) {
      // this.total = subtotal + 1
      this.total = 3548630000000000000000000
    } else {
      this.total = total
      // this.total = 3548630000000000000000000
    }
    this.yes = Number(element.yes_count) / this.total
    if (this.yes > 1) {
      this.yes = 1
    }
    this.no = Number(element.no_count) / this.total
    this.veto = Number(element.no_with_veto_count) / this.total
    this.abstain = Number(element.abstain_count) / this.total
    this.turnout = subtotal / this.total
    return this
  }

  total() {
    return this.total
  }
}
