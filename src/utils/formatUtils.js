import * as Chart from 'chart.js';

export const pieLegendFormatter = function (chart) {
  var data = chart.data;
  if (data.labels.length && data.datasets.length) {
    return data.labels.map(function (label, i) {
      var meta = chart.getDatasetMeta(0);
      var ds = data.datasets[0];
      var arc = meta.data[i];
      var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
      var arcOpts = chart.options.elements.arc;

      // Valor atual
      var value =
        chart.config.data.datasets[arc._datasetIndex].data[arc._index];

      return {
        text: `${label} : ${value}`,
        fillStyle: getValueAtIndexOrDefault(
          ds.backgroundColor,
          i,
          arcOpts.backgroundColor
        ),
        strokeStyle: getValueAtIndexOrDefault(
          ds.borderColor,
          i,
          arcOpts.borderColor
        ),
        lineWidth: getValueAtIndexOrDefault(
          ds.borderWidth,
          i,
          arcOpts.borderWidth
        ),
        hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
        index: i,
      };
    });
  } else {
    return [];
  }
};

export const mapLegendFormatter = function (chart) {
  const data = chart.data;
  if (data.labels.length && data.datasets.length) {
    return [
      {
        text: `Usuários por estado`,
        fillStyle: '#F6303F',
      },
    ];
  } else {
    return [];
  }
};
