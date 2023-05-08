const history = {
  records: [],
  get templateRecords() {
    const template = this.records.map(
      (record) =>
        '<li class="record">' + JSON.stringify(record, null, 50) + '</li>'
    );
    return (
      '<ul class="records card card__shadow">' + template.join(' ') + '</ul>'
    );
  },
  drawRecords() {
    document.write(this.templateRecords);
  },
};

const shape = {
  dependencies: Object.seal({
    left: 100,
    right: 100,
    top: 100,
    bottom: 100,
  }),

  get perimeter() {
    const lastHistoryElement = history.records[history.records.length - 1];

    if (
      lastHistoryElement &&
      this.dependencies.left === lastHistoryElement.dependencies.left &&
      this.dependencies.right === lastHistoryElement.dependencies.right &&
      this.dependencies.top === lastHistoryElement.dependencies.top &&
      this.dependencies.bottom === lastHistoryElement.dependencies.bottom
    ) {
      return lastHistoryElement.perimeter;
    }

    const total = Object.values(this.dependencies).reduce(
      (accm, value) => accm + value,
      0
    );

    history.records.push({
      dependencies: this.dependencies,
      perimeter: total,
    });

    console.log(history.records);

    return total;
  },

  set perimeter(perimeter) {
    if (!Number.isInteger(perimeter) || perimeter < 400) {
      return;
    }

    const size = perimeter / 4;

    this.dependencies = Object.seal({
      left: size,
      right: size,
      top: size,
      bottom: size,
    });

    history.records.push({
      dependencies: this.dependencies,
      perimeter: perimeter,
    });
  },
};

console.log(shape.perimeter, 'shape.perimeter');
console.log(shape.perimeter, 'shape.perimeter');
console.log(shape.perimeter, 'shape.perimeter');

history.drawRecords();

console.log(shape.dependencies, 'shape.dependencies');
console.log(
  history.records[history.records.length - 1].dependencies,
  'records'
);
