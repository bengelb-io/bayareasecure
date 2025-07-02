import type p5 from "p5";
import type { Reactive } from "vue";


type HyperSpaceControls = {
    width: number;
    height: number;
    canvasId: string;
    speed: number;
}

const useHyperspace = (controls: Reactive<HyperSpaceControls>) => {

    const filterInPlace = <T>(array: T[], predicate: (value: T) => boolean) => {
        let i = 0;
        while (i < array.length) {
            if (!predicate(array[i])) {
                array.splice(i, 1);
            } else {
                i++;
            }
        }
    }

    const hyperSpace = (p: p5) => {
        class Star {
            pos: p5.Vector;
            prevPos: p5.Vector;
            vel: p5.Vector;
            ang: number;

            constructor(x: number, y: number) {
                this.pos = p.createVector(x, y);

                this.prevPos = p.createVector(x, y);
                this.vel = p.createVector(0, 0);

                this.ang = p.atan2(y - p.height / 2, x - p.width / 2);
            }

            isActive() {
                return onScreen(this.prevPos.x, this.prevPos.y);
            }

            update(acc: number) {
                this.vel.x += p.cos(this.ang) * acc;
                this.vel.y += p.sin(this.ang) * acc;

                this.prevPos.x = this.pos.x;
                this.prevPos.y = this.pos.y;

                this.pos.x += this.vel.x;
                this.pos.y += this.vel.y;
            }

            draw() {
                const alpha = p.map(this.vel.mag(), 0, 3, 0, 255);
                p.stroke(255, alpha);
                p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
            }
        }

        const numStars = 500;
        const stars: Star[] = [];

        function setup() {
            const canvas = p.createCanvas(
                controls.width,
                controls.height,
            );
            if (controls.canvasId) {
                canvas.parent(controls.canvasId);
            }
            p.stroke(255);
            p.strokeWeight(2);

            for (let i = 0; i < numStars; i++) {
                stars.push(new Star(p.random(p.width), p.random(p.height)));
            }
        }

        function draw() {
            p.background(15, 23, 42, 75);

            const acc = p.map(controls.speed, 0, p.width, 0.005, 0.2);

            filterInPlace(stars, (star) => {
                star.draw();
                star.update(acc);
                return star.isActive();
            });

            while (stars.length < numStars) {
                stars.push(new Star(p.random(p.width), p.random(p.height)));
            }
        }



        function onScreen(x: number, y: number) {
            return x >= 0 && x <= p.width && y >= 0 && y <= p.height;
        }
        p.setup = setup;
        p.draw = draw;
    };

    return hyperSpace;
}

export default useHyperspace;