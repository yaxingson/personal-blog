export class Vector {
  constructor(public x:number, public y:number) {}

  add(other:Vector) {
    this.x += other.x
    this.y += other.y
    return this
  }

  length() {
    return Math.hypot(this.x, this.y)
  }

  rotate(theta:number) {
    this.x = Math.cos(theta) * this.x - Math.sin(theta) * this.y
    this.y = Math.sin(theta) * this.x + Math.cos(theta) * this.y
    return this
  }

  mult(f:number) {
    this.x *= f
    this.y *= f
    return this
  }
}

export class Leaf {
  p:Vector|null
  r:number
  c:string
  ctx:CanvasRenderingContext2D
  
  constructor(p:Vector, r:number, c:string, ctx) {
    this.p = p || null
    this.r = r || 0
    this.c = c || 'rgba(255,255,255,1.0)'
    this.ctx = ctx
  }
}

export class Branch {
  static circle = 2 * Math.PI

  static random = function (min, max) {
    return Math.random() * (max - min) + min;
  }

  static clone = function (b) {

    var r = new Branch(new Vector(b.p.x, b.p.y), new Vector(b.v.x, b.v.y), b.r, b.color, b.tree);
  
    r.generation = b.generation + 1;
  
    return r;
  
  }

  static rgba = function (r, g, b, a) {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
  }

  static randomrgba = function (min, max, a) {
    return Branch.rgba(Math.round(Branch.random(min, max)), Math.round(Branch.random(min, max)), Math.round(Branch.random(min, max)), a);
  }

  p:Vector|null
  v:Vector|null
  r:number
  tree:Tree|null
  color:string

  length = 0
  generation = 1

  constructor(p:Vector, v:Vector, r:number, c:string, t:Tree) {
    this.p = p || null
    this.v = v || null
    this.r = r || 0
    this.tree = t || null
    this.color = c || 'rgba(255,255,255,1.0)'

    this.register()
  }

  register() {
    this.tree!.addBranch(this)
  }

  draw() {
    const { ctx } = this.tree!
    const { p, r } = this

    if(p === null) return 

    ctx.beginPath()
    ctx.globalCompositeOperation = 'lighten'

    ctx.fillStyle = 'skyblue'

    ctx.moveTo(p.x, p.y)
    ctx.arc(p.x, p.y, r, 0, Branch.circle, true)

    ctx.fill()
  }

  modify() {
    const angle = 0.18 - (0.10 / this.generation)

    if(this.p === null || this.v === null) return

    this.p.add(this.v)
    
    this.length += this.v.length()

    this.r *= 0.99

    this.v.rotate(Branch.random(-angle, angle))

    if(this.r < 0.8 || this.generation > 10) {
      this.tree!.removeBranch(this)
      // new Leaf(this.p, 10, this.color, this.tree!.ctx)
    }
  }

  grow() {
    this.draw()
    this.modify()
    this.fork()
  }

  fork() {
    const p = this.length - Branch.random(100, 200); // + (this.generation * 10);
    
    if (p > 0) {
      const n = Math.round(Branch.random(1, 3))

      this.tree!.stat.fork += n - 1

      for (let i = 0; i < n; i++) {
        Branch.clone(this)
      }

      this.tree!.removeBranch(this)
    }
  }
}

export class Tree {
  timer:any
  branches:Branch[] = []
  ctx: CanvasRenderingContext2D

  stat = {
    fork: 0,
    length: 0
  }

  addBranch(b:Branch) {
    this.branches.push(b)
  }

  removeBranch(b:Branch) {
    for (let i = 0; i < this.branches.length; i++) {
      if (this.branches[i] === b) {
        this.branches.splice(i, 1);
        return;
      }
    }
  }

  render() {
    this.timer = setInterval(()=>{
      if(this.branches.length > 0) {
        for (let i = 0; i < this.branches.length; i++) {
          this.branches[i].grow()
        }
      } else {
        clearInterval(this.timer)
      }
    }, 1000/30)
  }

  init(ctx:CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  abort() {
    this.branches = []

    this.stat = {
      fork: 0,
      length: 0
    }
  }
}
