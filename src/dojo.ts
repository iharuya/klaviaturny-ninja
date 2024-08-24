export type Level = 'easy' | 'medium' | 'hard'

export type DojoConfig = {
  level: Level
}

export class Dojo {
  private score = 0
  private config: DojoConfig
  private trial: string | null = null

  constructor(config: DojoConfig) {
    this.config = config
  }

  get currentScore() {
    return this.score
  }

  get currentLevel() {
    return this.config.level
  }

  get currentTrial() {
    return this.trial
  }

  public requestTrial() {
    // TODO: Fetch from DB
    let trial: string
    switch (this.config.level) {
      case 'easy':
        trial = 'simple word'
        break
      case 'medium':
        trial = 'ффффф'
        break
      case 'hard':
        trial = 'some long sentence'
        break
    }
    this.trial = trial
    return trial
  }

  public submitTrial(trial: string) {
    if (trial !== this.trial) {
      return false
    }
    switch (this.config.level) {
      case 'easy':
        this.score += 1
        break
      case 'medium':
        this.score += 2
        break
      case 'hard':
        this.score += 3
        break
    }
    this.trial = null
    return true
  }
}
